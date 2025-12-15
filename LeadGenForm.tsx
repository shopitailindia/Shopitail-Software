const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbxcHeiM1Zs77wZXBJER3NdoBk8BdfYyE0sA3C0wg2vYd43dd2KCRwxpYjFMLeJnJG0d/exec";

  await fetch(scriptUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  setSubmitted(true);

  setTimeout(() => {
    setSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      orgType: "",
      seats: "",
      message: "",
    });
  }, 3000);
};
