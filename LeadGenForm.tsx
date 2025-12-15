const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbwG254yNHbhODxVCtDR59PihPWNDDyPfM_3wVzkuQoF49cu3OuwBIgumEpNSA0uUhPT/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    setSubmitted(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      orgType: "",
      seats: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 3000);
  } catch (error) {
    alert("Submission failed. Please try again.");
    console.error(error);
  }
};
