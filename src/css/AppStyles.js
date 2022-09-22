import React, { Component } from 'react';
import {
    StyleSheet
} from 'react-native';


const Styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'space-between',
        flex: 1,
    },
    headerH2: {
        fontSize: 24,
        color: '#000000',
        textAlign: 'left',
    },
    AppHeader: {
        height: 56,
        backgroundColor: '#e03c00',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    iconView: {
        flex: 0,
    },
    headerText: {
        fontSize: 20,
        color: '#ffffff',
    },
    iconRight: {
        flex: 0,
        padding: 10,
    },
    AppFooter: {
        height: 56,
    },
    titleLeft: {
        flex: 1,
        paddingHorizontal: 10
    },
    fixedView: {
        flex: 1,
        backgroundColor: '#ddd',
        padding: 50,
    },
    viewAlignCenter: {
        justifyContent: 'center',
    },
    inputFieldCenter: {
        textAlign: 'center',
        fontSize: 16,
    },
    btnView: {
        marginTop: 20,
    },
    btnPrimary: {
        height: 48,
        backgroundColor: '#e03c00',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    btnText: {
        color: '#ffffff',
        fontSize: 18,
    },
    btnPrimaryOutline: {
        backgroundColor: 'transparent',
    },
    textPrimary: {
        color: '#e03c00',
        fontSize: 18,
    },
    myList: {
        flex: 1,
        padding: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#ddd',
        flexDirection: 'row'
    },
    fullWidth: {
        flex: 1,
    },
    autoWidth: {
        flex: 0,
        paddingHorizontal: 10
    },
    vAlign: {
        justifyContent: 'center'
    },
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column'
    },
    containerOne: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 6,
        padding: 10,
        margin: 10,
    },
    item: {
        padding: 0,
        fontSize: 18,
        height: 30,
    },
    textItemView: {
        alignSelf: 'stretch',
        padding: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    likeButton: {
        backgroundColor: 'white',
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
    },
    itemOne: {
        padding: 0,
        fontSize: 12,
        height: 20,
    },
    inputHolder: {
        alignSelf: 'stretch',
        margin: 15,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderRadius: 8,
        borderWidth: 1
    },
    btnStyle: {
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: "#000",
        height: 40,
    },
    btnTextStyle: {
        color: 'white',
        fontSize: 16,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontFamily: 'Quicksand-Medium'
    },
    inner_container: {
        backgroundColor: 'white',
        flex: 0,

    },
    inner_container_two: {
        padding: 6,
        flexDirection: 'column',
        alignSelf: 'stretch',
        backgroundColor: 'white',
        flex: 1,
    },
    inner_container_three: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: 'white',
        alignItems: 'center',
        flex: 0,
    },
    inner_container_four: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    icon: {
        paddingLeft: 10
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: 120
    }
});

module.exports = Styles;