const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('fullName', profile.fullName);
  formData.append('contactNumber', profile.contactNumber);
  formData.append('password', profile.password);
  formData.append('skills', profile.skills);
  formData.append('location', profile.location);
  formData.append('id', profile.id);
  formData.append('cv', profile.cv);
  formData.append('driversLicense', profile.driversLicense);
  formData.append('qualification', profile.qualification);

  // Send formData to a server (e.g., using axios)
  await axios.post('your-server-endpoint', formData);
};
