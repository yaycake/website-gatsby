import React from "react"
import styles from './contact.module.css'
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
// import styles from './contact.module.css'

const ContactPage = () => {

    // const email = 
    return (
        <Layout>
            {/* <div className = {styles.formContainer}> */}
                <div className = {styles.formTitle}>
                    Contact Me
                    <text className = {styles.formBlurb}>Send me a message here, or email me at </text>
                </div>
                
                <form 
                    className ={styles.contactForm}
                    action="https://formspree.io/im@thegraceyang.com"
                    method="POST"
                >
                    {/* <div className={styles.formRow}> */}
                        <div className={styles.formItem}>
                            <label>Name</label>
                            <input type="text" name="name"/>
                        </div>

                        <div className={styles.formItem}>
                            <label>Email</label>
                            <input type="text" name="_replyto"/>
                        </div>
                    {/* </div> */}
                    
                     
                     <div className={styles.formItem}>
                        <label>Message</label>
                        <textarea name="message"></textarea>
                     </div>

                    <button className = {styles.submitButton} type="submit">Send</button>
                </form>
            {/* </div> */}
            
        </Layout>
        
    )
}


export default ContactPage