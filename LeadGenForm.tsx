const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await fetch("https://script.google.com/macros/s/AKfycbxPacNKyP_bwTF2gC4Il0rHz0tGZxdWEuhns_wnHTOEQh_mH9TW3V-zYv_Lp7p2E2vT/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        orgType: formData.orgType,
        seats: formData.seats,
        message: formData.message,
      }),
    });

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
  } catch (err) {
    alert("Submission failed. Please try again.");
    console.error(err);
  }
};
