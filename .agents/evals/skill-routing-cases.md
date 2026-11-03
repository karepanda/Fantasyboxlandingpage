# Skill Routing Cases

Use these cases when descriptions change. A matching skill should activate only when its workflow materially helps the request.

| User request | Expected primary skill | May compose with | Must not be the primary skill |
| --- | --- | --- | --- |
| "Add customer testimonials with moderation rules and a new submission flow." | `sdd-workflow` | `feature-development`, `ux-ui-design`, `change-verification` | `systematic-debugging` |
| "Add a small optional subtitle to the existing hero data model." | `feature-development` | `change-verification` | `sdd-workflow` unless ambiguity or risk emerges |
| "The request form stopped submitting after the last change; find and fix the cause." | `systematic-debugging` | `change-verification` | `code-quality-review` |
| "Explain why the product image dialog closes unexpectedly, but do not edit files." | `systematic-debugging` | None | `feature-development` |
| "Review ProductCard for correctness and maintainability without changing it." | `code-quality-review` | None | `feature-development` |
| "Refactor repeated form field markup without changing behavior." | `code-quality-review` | `change-verification` | `sdd-workflow` unless the refactor becomes architectural |
| "Redesign the request modal for clearer hierarchy and keyboard accessibility." | `ux-ui-design` | `feature-development`, `change-verification` | `systematic-debugging` |
| "Audit mobile spacing and focus states across the landing page." | `ux-ui-design` | `code-quality-review` | `sdd-workflow` |
| "Validate the finished tote-bag change before handoff." | `change-verification` | None | `feature-development` |
| "Update the project documentation with a corrected command." | None | None | All implementation skills |

## Expected composition rules

- A substantial UI feature can use `sdd-workflow` for the contract, `feature-development` for implementation, `ux-ui-design` for experience constraints, and `change-verification` at handoff.
- A reproducible defect uses `systematic-debugging`; it does not become a refactor request unless the user expands the scope.
- A read-only review uses `code-quality-review` and must not imply authorization to edit.
- `change-verification` closes work; it does not invent missing requirements or silently repair failures.
