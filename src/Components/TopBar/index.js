import React from 'react'
import logo from '../../images/logo.png'
import '../../App.css'
import { makeStyles } from '@material-ui/core/styles'
import { colors } from '../../utils'
const useStyles = makeStyles(theme => ({
    topBar: {
        width: "100vw",
        minHeight: "5vh",
    },
    topBarContainer: {
        padding: "10px 40px",
        display: "flex",
        alignItems: "center",

        justifyContent: "space-between",
        [theme.breakpoints.down('xs')]: {
            padding: "10px 10px"
        }
    },
    navLinksContainer: {
        display: "flex",
        alignItems: "center"
    },
    navLinks: {
        listStyle: "none",
        display: "flex",

    },
    logoContainer: {
        margin: "0 30px",

    },
    links: {
        margin: "0px 30px",
        // padding: "0 10px",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        lineHeight: "20px",
        color: colors.darkBlue
    },
    signUpButton: {
        margin: "0 30px",
        width: "108px",
        padding: '8px 24px',
        outline: "none",
        border: "none",
        backgroundColor: colors.primary,
        borderRadius: "40px",
        height: "40px",
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "20px",
        color: "#fff"
        // padding: "10px",
    }

}))
const TopBar = () => {
    const classes = useStyles()
    return (
        <div className={classes.topBar}>
            <div className={classes.topBarContainer}>
                <div className={classes.logoContainer}>
                    <img src={logo} alt="" className={classes.logo} />
                </div>
                <div className={classes.navLinksContainer}>
                    <ul className={classes.navLinks}>
                        <li className={classes.links}>Contact</li>
                        <li className={classes.links}>Exams</li>
                        <li className={classes.links}>Sign in</li>
                    </ul>
                    <button className={classes.signUpButton}>Sign up</button>
                </div>
            </div>
        </div>
    )
}
export default TopBar
