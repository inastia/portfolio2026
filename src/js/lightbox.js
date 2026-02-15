// IMAGE LIGHTBOX FUNCTIONALITY

function initImageLightbox() {
  // Create lightbox overlay (only once)
  if (!document.querySelector(".lightbox-overlay")) {
    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    overlay.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Close image">
          <span aria-hidden="true">×</span>
          <span class="sr-only">Close</span>
        </button>
        <img src="" alt="" style="cursor: zoom-out;" />
      </div>
    `;
    document.body.appendChild(overlay);

    // Get the lightbox image
    const lightboxImg = overlay.querySelector(".lightbox-content img");

    // Close on overlay click (outside image)
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeLightbox();
      }
    });

    // Close on image click
    lightboxImg.addEventListener("click", closeLightbox);

    // Close on X button click
    overlay
      .querySelector(".lightbox-close")
      .addEventListener("click", closeLightbox);

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("active")) {
        closeLightbox();
      }
    });
  }

  // Add click handlers to all lightbox trigger images
  document.querySelectorAll(".lightbox-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const largestSrc = getLargestImageSrc(trigger);
      const img = trigger.querySelector("img");
      openLightbox(largestSrc, img.alt);
    });

    // Make it keyboard accessible
    trigger.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const largestSrc = getLargestImageSrc(trigger);
        const img = trigger.querySelector("img");
        openLightbox(largestSrc, img.alt);
      }
    });
  });
}

// Helper function to extract the largest image from srcset
function getLargestImageSrc(trigger) {
  const picture =
    trigger.tagName === "PICTURE" ? trigger : trigger.querySelector("picture");

  if (picture) {
    // Get the first source element (desktop/largest breakpoint)
    const firstSource = picture.querySelector("source");

    if (firstSource && firstSource.srcset) {
      const srcset = firstSource.srcset;

      // Parse srcset to find the 2x image (xlarge)
      // Format: "path/image-large.png 1x, path/image-xlarge.png 2x"
      const srcsetParts = srcset.split(",").map((s) => s.trim());

      // Look for 2x image first (highest resolution)
      const retinaSrc = srcsetParts.find((part) => part.includes("2x"));
      if (retinaSrc) {
        return retinaSrc.split(" ")[0]; // Extract just the URL
      }

      // Fallback to 1x if no 2x found
      const standardSrc = srcsetParts.find((part) => part.includes("1x"));
      if (standardSrc) {
        return standardSrc.split(" ")[0];
      }

      // If no density descriptors, return first URL
      return srcsetParts[0].split(" ")[0];
    }

    // Fallback to img src if source doesn't have srcset
    return picture.querySelector("img").src;
  }

  // Fallback for non-picture elements
  const img =
    trigger.tagName === "IMG" ? trigger : trigger.querySelector("img");
  return img.src;
}

function openLightbox(src, alt) {
  const overlay = document.querySelector(".lightbox-overlay");
  const img = overlay.querySelector("img");

  // Hide image initially
  img.style.opacity = "0";
  img.style.transition = "opacity 0.3s ease";

  // Set src and alt
  img.src = src;
  img.alt = alt;

  // Show overlay
  overlay.classList.add("active");

  // Prevent body scroll
  document.body.style.overflow = "hidden";

  // Fade in image once it's loaded
  img.onload = () => {
    img.style.opacity = "1";
  };

  // Focus close button for accessibility
  overlay.querySelector(".lightbox-close").focus();
}

function closeLightbox() {
  const overlay = document.querySelector(".lightbox-overlay");
  overlay.classList.remove("active");

  // Restore body scroll
  document.body.style.overflow = "";
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", initImageLightbox);
