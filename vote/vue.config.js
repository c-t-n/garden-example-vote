module.exports = {
  devServer: {
    disableHostCheck: true,
    public: `vote.${process.env.VUE_APP_HOSTNAME}`,
  },
};
