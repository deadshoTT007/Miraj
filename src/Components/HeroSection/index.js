import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import hero from '../../images/hero.png'
import PrimaryButton from '../elements/PrimaryButton'
import { colors } from '../../utils'
const useStyles = makeStyles(theme => ({
    heroSection: {
        display: "grid",
        gridTemplateColumns: "60% 40%",
        gridColumnGap: "20px",
        margin: "0 70px",

    },
    heroTextContainer: {
        height: "50vh",
        minHeight: "50vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
    },
    heroMainText: {
        fontSize: "64px",
        lineHeight: "80px",
        fontWeight: "500",
        color: colors.darkBlue,
        textTransform: "capitalize"

    },
    heroText: {
        fontWeight: "400",
        fontSize: "24px",
        lineHeight: "30px",
        color: colors.darkBlue
    },
    heroImageContainer: {
        display: 'flex',
        alignItems: "center",
        height: "50vh",
        minHeight: "50vh",
        justifyContent: "flex-end",
        overfloe: "hidden",
        background: "linear-gradient(145deg,#97F08D -0.61%, #05DEB7 99.01%)",
        borderRadius: "945px 900px 477px 900px",
    },
    heroImage: {
        objectFit: "cover",
        // width: "100%"
        marginRight: "10px",
    },
    stat: {
        width: "100vw",
        margin: "70px 0px",
    },
    statContainer: {
        margin: "0 auto",

        minHeight: "140px",
        width: "70%",
        maxWidth: "900px",
        boxShadow: "8px 8px 32px rgba(94, 134, 196, 0.1)",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        '&>*': {
            flex: 1
        }
    },
    test: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    },
    total: {
        fontSize: "40px",
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: "50px",
        color: colors.primary
    },
    statText: {
        fontSize: "20px",
        lineHeight: "25px",
        color: colors.gray,
        textTransform: "capitalize",
        marginRight: "5%"
    },
    classes: {
        borderLeft: `1px solid ${colors.gray}`,
        borderRight: `1px solid ${colors.gray}`,
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    },
    students: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    }
}))
const HeroSection = () => {
    const classes = useStyles()
    return (
        <div className={classes.main}>
            <div className={classes.heroSection}>
                <div className={classes.heroTextContainer}>
                    <div className={classes.heroMainText}>Making distance  learning easy.</div>
                    <p className={classes.heroText}>Making distance learning easy.</p>
                    <PrimaryButton title="Start Learning" style={{ width: "250px" }} />
                </div>
                <div className={classes.heroImageContainer}>
                    <img src={hero} alt="" className={classes.heroImage} />
                </div>

            </div>
            <div className={classes.stat}>
                <div className={classes.statContainer}>
                    <div className={classes.test}>
                        <div className={classes.total}>1000+</div>
                        <div className={classes.statText}>test Taken</div>
                    </div>
                    <div className={classes.classes}>
                        <div className={classes.total}>1000+</div>
                        <div className={classes.statText}>test Taken</div>
                    </div>
                    <div className={classes.students}>
                        <div className={classes.total}>1000+</div>
                        <div className={classes.statText}>test Taken</div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default HeroSection
