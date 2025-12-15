const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const formDataToSend = new FormData();
  formDataToSend.append("name", formData.name);
  formDataToSend.append("phone", formData.phone);
  formDataToSend.append("email", formData.email);
  formDataToSend.append("orgType", formData.orgType);
  formDataToSend.append("seats", formData.seats);
  formDataToSend.append("message", formData.message);

  try {
    await fetch(
      "YOUR_LATEST_APPS_SCRIPT_WEB_APP_URL",
      {
        method: "POST",
        body: formDataToSend
      }
    );

    setSubmitted(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      orgType: "",
      seats: "",
      message: ""
    });

    setTimeout(() => setSubmitted(false), 3000);

  } catch (err) {
    alert("Submission failed. Please try again.");
    console.error(err);
  }
};
