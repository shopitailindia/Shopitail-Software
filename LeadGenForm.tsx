const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const formBody = new URLSearchParams();
  formBody.append("name", formData.name);
  formBody.append("phone", formData.phone);
  formBody.append("email", formData.email);
  formBody.append("orgType", formData.orgType);
  formBody.append("seats", formData.seats);
  formBody.append("message", formData.message);

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbzq5T0uhts7sYxES-Uw1NHLZdPHn6dIrx-ANK09UNtt9ExNXbEBTQS2fL2L1S3WD_-N/exec",
      {
        method: "POST",
        mode: "no-cors",
        body: formBody
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
    console.error(err);
    alert("Submission failed");
  }
};
