import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { colors } from '../../../utils'


const PrimaryButton = (props) => {
    const useStyles = makeStyles(theme => ({
        primaryButton: {
            width: props.style ? props.style.width : "10px",
            border: "none",
            outline: "none",
            height: "60px",
            borderRadius: "40px",
            backgroundColor: colors.primary,
            fontSize: '24px',
            fontWeight: "500",
            lineHeight: "30px",
            color: "#fff",
            marginTop: "30px"
        }
    }))
    const classes = useStyles()
    return (
        <button className={classes.primaryButton}>{props.title}</button>
    )
}
export default PrimaryButton
