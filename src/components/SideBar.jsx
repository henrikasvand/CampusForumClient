import React, { Component } from 'react'

export default class SideBar extends Component {
    // Tämä koodi tervehtii kellonajan mukaan Good morning/evening/night!
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        const styles = {
            fontSize: 30
        }

        if (hours < 12) {
            timeOfDay = "morning"
            styles.color = "#04756F"
        } else if (hours >= 12 && hours < 18) {
            timeOfDay = "afternoon"
            styles.color = "#FFFFFF"
        } else {
            timeOfDay = "night"
            styles.color = "#D90000"
        }

        return (
            <div>
                <h1 style={styles}>Good {timeOfDay}!</h1>
            </div>
        )
    }
}
