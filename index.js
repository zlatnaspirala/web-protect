import {protect} from "./app"

/**
 * This file created by:
 * @author Nikola Lukic 
 * @email zlatnaspirala@gmail.com mart 2024
 * @description npm import/export
 */
const Disclaimer = "This project is designed to protect web content by detecting active debugging tools and redirecting the user. Use it at your own responsibility. The intention of this project is strictly protective — not to harm, disrupt, or interfere with any legitimate user activity. Use ethically and in compliance with applicable laws."

var about = () => {
  console.info("Hi web-protect is ready...")
  console.info("--------------------------------------------")
  console.info(" List of features: ")
  console.info(" - Prevent opening debbuger ")
  console.info(" - Detect keyboard - detect window size")
  console.info("--------------------------------------------")
  console.info(` Disclaimer : ${Disclaimer}`)
}

export {
  protect,
  about
}