const getHomePage = (req, res) => {
  res.send("Welcome to our ChatRoom App!");
};
const getAboutPage = (req, res) => {
  res.send("Learn more about our app and company.");
};

module.exports = {
  getHomePage,
  getAboutPage,
};
