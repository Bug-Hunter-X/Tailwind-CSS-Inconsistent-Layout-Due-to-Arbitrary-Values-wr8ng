```javascript
// Solution using Tailwind's responsive design modifiers
<div class="w-full md:w-1/2 lg:w-1/3 bg-gray-200"></div>

// Solution using relative units (percentages)
<div class="w-50 bg-gray-200"></div>

// Solution creating a reusable class
<div class="my-custom-width bg-gray-200"></div>

/* In your main stylesheet or a separate component file:
.my-custom-width {
  @apply w-full md:w-1/2 lg:w-1/3;
}
*/
```