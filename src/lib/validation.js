const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Pure contact form validator shared between ContactForm UI
 * and future Stage 2 server/provider delivery once confirmed.
 */
export function validateContactForm(values) {
  const errors = {};
  const name = (values.name || "").trim();
  const email = (values.email || "").trim();
  const subject = (values.subject || "").trim();
  const message = (values.message || "").trim();

  if (!name) {
    errors.name = "Please enter your name.";
  } else if (name.length < 2) {
    errors.name = "Name should be at least 2 characters.";
  } else if (name.length > 100) {
    errors.name = "Name must be 100 characters or fewer.";
  }

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (subject.length > 150) {
    errors.subject = "Subject must be 150 characters or fewer.";
  }

  if (!message) {
    errors.message = "Please describe your project or inquiry.";
  } else if (message.length < 10) {
    errors.message = "Please include at least 10 characters so I can understand your inquiry.";
  } else if (message.length > 3000) {
    errors.message = "Message must be 3000 characters or fewer.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
