const { default: axios } = require("axios");

module.exports = {
    /**
     * Simple example.
     */
  
    "*/1 * * * *": async ({ strapi }) => {
        const refreach = async () => { 
            try {
              console.log("🚀 ~ START REFREACH  ~  ")
                const response = await axios.get(
                    "https://linkedin-8qzg.onrender.com/api/cronjob"
                  );
                  console.log("🚀 ~ END REFREACH  ~ ")
                } catch (error) {
                console.log('error')
            }
        }
        refreach()
      // Add your own logic here (e.g. send a queue of email, create a database backup, etc.).
    },
  };