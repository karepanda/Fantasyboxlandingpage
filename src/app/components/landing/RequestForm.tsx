import { useForm } from "react-hook-form";
import { X, CheckCircle } from "lucide-react";
import { RemoveScroll } from "react-remove-scroll";
import { useState } from "react";
import { FantasyButton } from "./FantasyButton";

interface RequestFormProps {
    productType: string;
    onClose: () => void;
}

interface FormData {
    fullName: string;
    email: string;
    shippingAddress: string;
    city: string;
    zipCode: string;
    phoneNumber: string;
    selectedColor: string;
    doubts: string;
    bookTitle?: string;
    readerType?: "physical" | "electronic";
    readerModel?: string;
}

const COLOR_OPTIONS = [
    { name: "Black", value: "#000000" },
    { name: "Gray", value: "#808080" },
    { name: "Brown", value: "#99582A" },
    { name: "Purple", value: "#aa33da" },
    { name: "Blue", value: "#3371b8" },
    { name: "Green", value: "#51bc4d" },
    { name: "Yellow", value: "#f1c337" },
    { name: "Orange", value: "#D97706" },
    { name: "Red", value: "#DC2626" },
    { name: "Pink", value: "#EC4899" },
];

export function RequestForm({ productType, onClose }: RequestFormProps) {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>({
        defaultValues: {
            selectedColor: COLOR_OPTIONS[0].value,
            readerType: "physical",
        },
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const readerType = watch("readerType");
    const selectedColor = watch("selectedColor");

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            // Find the color name from COLOR_OPTIONS
            const colorName = COLOR_OPTIONS.find((color) => color.value === data.selectedColor)?.name || "";

            // Build the payload for Google Apps Script
            const payload: Record<string, string | undefined> = {
                name: data.fullName,
                email: data.email,
                productType: productType,
                address: data.shippingAddress,
                city: data.city,
                zip: data.zipCode,
                phone: data.phoneNumber,
                color: colorName,
                comments: data.doubts,
                readerType: data.readerType,
                readerModel: data.readerModel,
                specifics: data.bookTitle
            };

            // Add product-specific fields
            if (isFantasyBox && data.bookTitle) {
                payload.specifics = data.bookTitle;
            }

            if (isKnittedSleeve) {
                payload.deviceType = `${data.readerType} - ${data.readerModel || ""}`;
            }

            // Send it to Google Apps Script
            await fetch(
                "https://script.google.com/macros/s/AKfycbzcKoBdHVBPqMXMMBK2tjlOKtWslQVBpCqbT8ltHDh_Nn18ulKk6FUT6oXbkOp0Bqvx/exec",
                {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );

            // Set success state
            setIsSuccess(true);
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitError("Failed to send your request. Please try again.");
            setIsSubmitting(false);
        }
    };

    const isFantasyBox = productType.includes("FantasyBox");
    const isKnittedSleeve = productType.includes("Knitted Sleeve");

    return (
        <RemoveScroll>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                <div className="fb-card w-full max-w-2xl max-h-[90vh] flex flex-col">
                    {isSuccess ? (
                        // Success Screen
                        <div className="bg-[var(--fb-section-peach)] flex flex-col items-center justify-center p-8 h-full rounded-lg">
                            <CheckCircle className="w-16 h-16 text-green-600 mb-4" />
                            <h2 className="fb-heading text-2xl text-center mb-4">Request Received! 🎉</h2>
                            <p className="text-center text-gray-700 mb-8 max-w-md">
                                We'll email you soon with the final price and details. Thank you for your interest in fantasyBox!
                            </p>
                            <FantasyButton variant="coffee" onClick={onClose}>
                                Close
                            </FantasyButton>
                        </div>
                    ) : (
                        <>
                            <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-gray-200 bg-[var(--fb-cream)]">
                                <h2 className="fb-heading text-2xl">Request {productType}</h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    aria-label="Close form"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6 overflow-y-auto">
                                {/* Shipment Details Section */}
                                <div>
                                    <h3 className="fb-heading text-lg mb-4">Shipment Details</h3>
                                    <div className="space-y-4">
                                        {/* Full Name */}
                                        <div>
                                            <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                id="fullName"
                                                placeholder="John Doe"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                                                {...register("fullName", { required: "Full name is required" })}
                                            />
                                            {errors.fullName && (
                                                <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                                            )}
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                                Email *
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                                                {...register("email", {
                                                    required: "Email is required",
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: "Invalid email address",
                                                    },
                                                })}
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                            )}
                                        </div>

                                        {/* Shipping Address */}
                                        <div>
                                            <label htmlFor="shippingAddress" className="block text-sm font-medium mb-2">
                                                Shipping Address *
                                            </label>
                                            <input
                                                id="shippingAddress"
                                                placeholder="123 Main Street"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                                                {...register("shippingAddress", { required: "Shipping address is required" })}
                                            />
                                            {errors.shippingAddress && (
                                                <p className="text-red-500 text-sm mt-1">{errors.shippingAddress.message}</p>
                                            )}
                                        </div>

                                        {/* City and ZIP Code */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="city" className="block text-sm font-medium mb-2">
                                                    City *
                                                </label>
                                                <input
                                                    id="city"
                                                    placeholder="New York"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                                                    {...register("city", { required: "City is required" })}
                                                />
                                                {errors.city && (
                                                    <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label htmlFor="zipCode" className="block text-sm font-medium mb-2">
                                                    ZIP Code *
                                                </label>
                                                <input
                                                    id="zipCode"
                                                    placeholder="10001"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                                                    {...register("zipCode", { required: "ZIP code is required" })}
                                                />
                                                {errors.zipCode && (
                                                    <p className="text-red-500 text-sm mt-1">{errors.zipCode.message}</p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Phone Number */}
                                        <div>
                                            <label htmlFor="phoneNumber" className="block text-sm font-medium mb-2">
                                                Phone Number *
                                            </label>
                                            <input
                                                id="phoneNumber"
                                                placeholder="+1 (555) 000-0000"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                                                {...register("phoneNumber", { required: "Phone number is required" })}
                                            />
                                            {errors.phoneNumber && (
                                                <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Product-Specific Fields */}
                                {isFantasyBox && (
                                    <div>
                                        <h3 className="fb-heading text-lg mb-4">Book Selection</h3>
                                        <label htmlFor="bookTitle" className="block text-sm font-medium mb-2">
                                            Book Title and Author/Link *
                                        </label>
                                        <textarea
                                            id="bookTitle"
                                            placeholder="e.g., 'The House in the Cerulean Sea by TJ Klune' or link to your wishlist"
                                            rows={3}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                                            {...register("bookTitle", {
                                                required: "Book title and author/link is required",
                                            })}
                                        />
                                        {errors.bookTitle && (
                                            <p className="text-red-500 text-sm mt-1">{errors.bookTitle.message}</p>
                                        )}
                                    </div>
                                )}

                                {isKnittedSleeve && (
                                    <div className="space-y-4">
                                        <h3 className="fb-heading text-lg mb-4">Reader Type</h3>
                                        <div className="space-y-3">
                                            <label className="flex items-center gap-3 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    value="physical"
                                                    {...register("readerType", { required: "Reader type is required" })}
                                                    className="w-4 h-4"
                                                />
                                                <span className="text-sm font-medium">Physical Book</span>
                                            </label>
                                            <label className="flex items-center gap-3 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    value="electronic"
                                                    {...register("readerType", { required: "Reader type is required" })}
                                                    className="w-4 h-4"
                                                />
                                                <span className="text-sm font-medium">Electronic Reader (Kindle/Kobo)</span>
                                            </label>
                                        </div>

                                        {readerType === "electronic" && (
                                            <div>
                                                <label htmlFor="readerModel" className="block text-sm font-medium mb-2">
                                                    Electronic Reader Model *
                                                </label>
                                                <input
                                                    id="readerModel"
                                                    placeholder="e.g., Kindle Paperwhite 2021"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                                                    {...register("readerModel", {
                                                        required: readerType === "electronic" ? "Reader model is required" : false,
                                                    })}
                                                />
                                                {errors.readerModel && (
                                                    <p className="text-red-500 text-sm mt-1">{errors.readerModel.message}</p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Color Selector */}
                                <div>
                                    <h3 className="fb-heading text-lg mb-4">Choose a Color</h3>
                                    <div className="grid grid-cols-5 gap-3">
                                        {COLOR_OPTIONS.map((color) => (
                                            <label
                                                key={color.value}
                                                className="flex flex-col items-center gap-2 cursor-pointer group"
                                            >
                                                <input
                                                    type="radio"
                                                    value={color.value}
                                                    {...register("selectedColor", { required: "Color selection is required" })}
                                                    className="hidden"
                                                />
                                                <div
                                                    className={`w-12 h-12 rounded-lg border-2 transition-all ${
                                                        selectedColor === color.value
                                                            ? "border-amber-900 scale-110 ring-2 ring-amber-300"
                                                            : "border-gray-300 group-hover:border-amber-600"
                                                    }`}
                                                    style={{ backgroundColor: color.value }}
                                                />
                                                <span className="text-xs text-center font-medium text-gray-700">
                                                    {color.name}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                    {errors.selectedColor && (
                                        <p className="text-red-500 text-sm mt-2">{errors.selectedColor.message}</p>
                                    )}
                                </div>

                                {/* Doubts/Comments */}
                                <div>
                                    <h3 className="fb-heading text-lg mb-4">Doubts or Comments</h3>
                                    <textarea
                                        placeholder="Tell us anything else you'd like us to know..."
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                                        {...register("doubts")}
                                    />
                                </div>

                                {/* Error Message */}
                                {submitError && (
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                        <p className="text-red-600 text-sm">{submitError}</p>
                                    </div>
                                )}

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <FantasyButton
                                        variant="coffee"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Sending..." : "Submit Request"}
                                    </FantasyButton>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </RemoveScroll>
    );
}



