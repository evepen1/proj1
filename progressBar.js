import React, { Component } from 'react';
import { connect } from 'react-redux';
import TradeException from '../tradeExceptions/tradeException';
import * as Action from '../../actionCreators/actionCreator';
import ewbtpStore from '../../store/ewbtpStore';

export default class ProgressBar extends Component {

    constructor(props) {
        super(props);
    }

    handleClickException(e) {
        console.log("Props===>", this.props);
        ewbtpStore.dispatch(Action.severitySelect('All'));
        ewbtpStore.dispatch(Action.stageSelect(this.props.stageName));
        ewbtpStore.dispatch(Action.clientSelect(this.props.clientName));
        window.location.hash = '#/tradeException';
    }

    getGreenWidth() {
        return (this.props.green / this.getSum()) * 100;
    }

    getOrangeWidth() {
        return (this.props.orange / this.getSum()) * 100;
    }

    getBlueWidth() {
        return (this.props.blue / this.getSum()) * 100;
    }
    getRedWidth() {
        return (this.props.red / this.getSum()) * 100;
    }

    getSum() {
        return this.props.green + this.props.orange + this.props.blue + this.props.red;
    }

    render() {
        let startIndex = -1;
        let lastIndex = -1;
        if (this.props.green > 0) {
            startIndex = 0;
        }
        else if (this.props.orange > 0) {
            startIndex = 1;
        }
        else if (this.props.blue > 0) {
            startIndex = 2;
        }
        else if (this.props.red > 0) {
            startIndex = 3;
        }
        if (this.props.red > 0) {
            lastIndex = 3;
        }
        else if (this.props.blue > 0) {
            lastIndex = 2;
        }
        else if (this.props.orange > 0) {
            lastIndex = 1;
        }
        else if (this.props.green > 0) {
            lastIndex = 0;
        }

        if (this.getGreenWidth() <= 12 && this.getGreenWidth() != 0 || this.getBlueWidth() <= 12 && this.getBlueWidth() != 0
            || this.getOrangeWidth() <= 12 && this.getOrangeWidth() != 0 || this.getRedWidth() <= 12 && this.getRedWidth() != 0) {

            if (this.getGreenWidth() <= 12 && this.getGreenWidth() != 0) {
                var greenWidth = 12;
                var orangeWidth;
                var blueWidth;
                var redWidth;
                var newWidth = greenWidth - this.getGreenWidth();
                var h0 = this.getGreenWidth();
                var h1 = this.getOrangeWidth();
                var h2 = this.getBlueWidth();
                var h3 = this.getRedWidth();
                var tempArray = [h0, h1, h2, h3];
                var maxIndex = 0;
                for (var i = 1; i < tempArray.length; i++) {
                    if (tempArray[maxIndex] < tempArray[i]) {
                        maxIndex = i;
                    }
                }
                if ('h' + maxIndex == 'h1') {
                    orangeWidth = this.getOrangeWidth() - newWidth;
                } else {
                    orangeWidth = this.getOrangeWidth();
                }
                if ('h' + maxIndex == 'h2') {
                    blueWidth = this.getBlueWidth() - newWidth;
                } else {
                    blueWidth = this.getBlueWidth();
                }
                if ('h' + maxIndex == 'h3') {
                    redWidth = this.getRedWidth() - newWidth;
                } else {
                    redWidth = this.getRedWidth();
                }
            }
            if (this.getBlueWidth() <= 12 && this.getBlueWidth() != 0) {

                blueWidth = 12;
                newWidth = blueWidth - this.getBlueWidth();
                h0 = this.getBlueWidth();
                h1 = this.getOrangeWidth();
                h2 = this.getGreenWidth();
                h3 = this.getRedWidth();
                tempArray = [h0, h1, h2, h3];
                maxIndex = 0;
                for (var i = 1; i < tempArray.length; i++) {
                    if (tempArray[maxIndex] < tempArray[i]) {
                        maxIndex = i;
                    }
                }
                if ('h' + maxIndex == 'h1') {
                    orangeWidth = this.getOrangeWidth() - newWidth;
                } else {
                    orangeWidth = this.getOrangeWidth();
                }
                if ('h' + maxIndex == 'h2') {
                    greenWidth = this.getGreenWidth() - newWidth;
                } else {
                    greenWidth = this.getGreenWidth();
                }
                if ('h' + maxIndex == 'h3') {
                    redWidth = this.getRedWidth() - newWidth;
                } else {
                    redWidth = this.getRedWidth();
                }
            }
            if (this.getOrangeWidth() <= 12 && this.getOrangeWidth() != 0) {

                orangeWidth = 12;
                newWidth = orangeWidth - this.getOrangeWidth();
                h0 = this.getOrangeWidth();
                h1 = this.getGreenWidth();
                h2 = this.getBlueWidth();
                h3 = this.getRedWidth();
                tempArray = [h0, h1, h2, h3];
                maxIndex = 0;
                for (var i = 1; i < tempArray.length; i++) {
                    if (tempArray[maxIndex] < tempArray[i]) {
                        maxIndex = i;
                    }
                }
                if ('h' + maxIndex == 'h1') {
                    greenWidth = this.getGreenWidth() - newWidth;
                } else {
                    greenWidth = this.getGreenWidth();
                }
                if ('h' + maxIndex == 'h2') {
                    blueWidth = this.getBlueWidth() - newWidth;
                } else {
                    blueWidth = this.getBlueWidth();
                }
                if ('h' + maxIndex == 'h3') {
                    redWidth = this.getRedWidth() - newWidth;
                } else {
                    redWidth = this.getRedWidth();
                }

            }
            if (this.getRedWidth() <= 12 && this.getRedWidth() != 0) {

                redWidth = 12;
                newWidth = redWidth - this.getRedWidth();
                h0 = this.getRedWidth();
                h1 = this.getOrangeWidth();
                h2 = this.getBlueWidth();
                h3 = this.getGreenWidth();
                tempArray = [h0, h1, h2, h3];
                maxIndex = 0;
                for (var i = 1; i < tempArray.length; i++) {
                    if (tempArray[maxIndex] < tempArray[i]) {
                        maxIndex = i;
                    }
                }
                if ('h' + maxIndex == 'h1') {
                    orangeWidth = this.getOrangeWidth() - newWidth;
                } else {
                    orangeWidth = this.getOrangeWidth();
                }
                if ('h' + maxIndex == 'h2') {
                    blueWidth = this.getBlueWidth() - newWidth;
                } else {
                    blueWidth = this.getBlueWidth();
                }
                if ('h' + maxIndex == 'h3') {
                    greenWidth = this.getGreenWidth() - newWidth;
                } else {
                    greenWidth = this.getGreenWidth();
                }
            }

            var style_green = {
                width: greenWidth + '%'
            };
            var style_orange = {
                width: orangeWidth + '%'
            };
            var style_blue = {
                width: blueWidth + '%'
            };
            var style_red = {
                width: redWidth + '%'
            };
        }
        else {
            var style_green = {
                width: this.getGreenWidth() + '%'
            };
            var style_orange = {
                width: this.getOrangeWidth() + '%'
            };
            var style_blue = {
                width: this.getBlueWidth() + '%'
            };
            var style_red = {
                width: this.getRedWidth() + '%'
            };

        }

        switch (startIndex) {
            case 0: {
                style_green.borderTopLeftRadius = '10px';
                style_green.borderBottomLeftRadius = '10px';
                break;
            }
            case 1: {
                style_orange.borderTopLeftRadius = '10px';
                style_orange.borderBottomLeftRadius = '10px';
                break;
            }
            case 2: {
                style_blue.borderTopLeftRadius = '10px';
                style_blue.borderBottomLeftRadius = '10px';
                break;
            }
            case 3: {
                style_red.borderTopLeftRadius = '10px';
                style_red.borderBottomLeftRadius = '10px';
                break;
            }
        }
        switch (lastIndex) {
            case 0: {
                style_green.borderTopRightRadius = '10px';
                style_green.borderBottomRightRadius = '10px';
                break;
            }
            case 1: {
                style_orange.borderTopRightRadius = '10px';
                style_orange.borderBottomRightRadius = '10px';
                break;
            }
            case 2: {
                style_blue.borderTopRightRadius = '10px';
                style_blue.borderBottomRightRadius = '10px';
                break;
            }
            case 3: {
                style_red.borderTopRightRadius = '10px';
                style_red.borderBottomRightRadius = '10px';
                break;
            }
        }
        var bgColors = { "Blue": "#287eba", "Green": "#90ec7d", "Red": "#ff3d11", "Yellow": "#ffe330" };

        return (
            <div className='ewbtc-probar-container'>
                <div style={{ ...style_green, backgroundColor: bgColors.Green }} className='ewbtc-probar-green'  >
                    {this.props.green == 0 ? '' : this.props.green}
                </div>
                <div style={{ ...style_orange, backgroundColor: bgColors.Yellow }} className='ewbtc-probar-orange' >
                    {this.props.orange == 0 ? '' : this.props.orange}
                </div>
                <div style={{ ...style_blue, backgroundColor: bgColors.Blue }} className='ewbtc-probar-blue'>
                    {this.props.blue == 0 ? '' : this.props.blue}
                </div>
                <div style={{ ...style_red, backgroundColor: bgColors.Red }} className='ewbtc-probar-red' onClick={(e) => { this.handleClickException(e) }}>
                    {this.props.red == 0 ? '' : this.props.red}
                </div>
            </div>
        );
    }

}



