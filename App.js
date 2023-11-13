import React, {Component} from 'react';
import {Image, ImageBackground, ScrollView, StyleSheet, Text, View, TextInput} from 'react-native';
import {Wallet2, ArrowSquareUp, Note, Menu, Car, Broom, Box, ShoppingCart, NoteFavorite, ShoppingBag, User, SearchNormal1} from 'iconsax-react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/components/Router';
export default function App()
{
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
}

const MainBody = () => {
  <View style={{margin: 10}}>
    <View>
      <ScrollView horizontal>
        <View style={styles.icon_menu}>
          <View style={{padding:10, borderRadius: 10, backgroundColor: "#d9fbce"}}>
            <ArrowSquareUp
              color="#00a72c"
              variant="Bold"
              size={40}
            />
          </View>
          <Text>GoRide</Text>
        </View>
        <View style={styles.icon_menu}>
          <View style={{padding:10, borderRadius: 10, backgroundColor: "#d9fbce"}}>
            <Car
              color="#00a72c"
              variant="Bold"
              size={40}
            />
          </View>
          <Text>GoCar</Text>
        </View>
        <View style={styles.icon_menu}>
          <View style={{padding:10, borderRadius: 10, backgroundColor: "#fedfdd"}}>
            <Broom
              color="#fc001d"
              variant="Bold"
              size={40}
            />
          </View>
          <Text>GoFood</Text>
        </View>
        <View style={styles.icon_menu}>
          <View style={{padding:10, borderRadius: 10, backgroundColor: "#d9fbce"}}>
            <Box
              color="#00a72c"
              variant="Bold"
              size={40}
            />
          </View>
          <Text>GoSend</Text>
        </View>
      </ScrollView>
      <ScrollView horizontal style={{marginTop:20}}>
        <View style={styles.icon_menu}>
          <View style={{padding:10, borderRadius: 10, backgroundColor: "#fedfdd"}}>
            <ShoppingCart
              color="#fc001d"
              variant="Bold"
              size={40}
            />
          </View>
          <Text>GoMart</Text>
        </View>
        <View style={styles.icon_menu}>
          <View style={{padding:10, borderRadius: 10, backgroundColor: "#caf5fc"}}>
            <NoteFavorite
              color="#02c0e6"
              variant="Bold"
              size={40}
            />
          </View>
          <Text>Tagihan</Text>
        </View>
        <View style={styles.icon_menu}>
          <View style={{padding:10, borderRadius: 10, backgroundColor: "#fedfdd"}}>
            <ShoppingBag
              color="#fc001d"
              variant="Bold"
              size={40}
            />
          </View>
          <Text>GoShop</Text>
        </View>
        <View style={styles.icon_menu}>
          <View style={{padding:10, borderRadius: 30, backgroundColor: "#ededed"}}>
            <Menu
              color="grey"
              variant="Bold"
              size={40}
            />
          </View>
          <Text>Lainnya</Text>
        </View>
      </ScrollView>
    </View>
    <View style={styles.container}>
      <ImageBackground
        style={{height: 190, borderStyle: 'solid', borderRadius: 10, overflow: 'hidden'}}
        resizeMode="cover"
        source={require('./assets/promo-ramadhan-go-food-extension.jpg')}
      ></ImageBackground>
    </View>
    <View style={styles.container}>
      <Text style={styles.title}>Cek Yang Menarik Di GoFood</Text>
      <ImageBackground
        style={{height: 190, borderStyle: 'solid', marginTop: 10, borderRadius: 10, overflow: 'hidden'}}
        resizeMode="cover"
        source={require('./assets/banana_strudel.jpeg')}
      ></ImageBackground>
    </View>
    <View style={styles.container}>
      <Text style={styles.title}>Resto dengan rating jempolan</Text>
      <Text>Bersponsor</Text>
      <ScrollView horizontal>
        <View style={styles.card_jempolan}>
          <ImageBackground
            style={{height: 190,  borderStyle: 'solid', marginTop: 10,borderRadius: 10, overflow: 'hidden'}}
            resizeMode="cover"
            source={{uri: "https://www.loveusaha.com/wp-content/uploads/2020/03/Gambar3.png"}}
          />
          <View style={{marginTop:10}}>
            <Text>6Km</Text>
            <Text>Bakso Solo Karanglo</Text>
          </View>
        </View>
        <View style={styles.card_jempolan}>
          <ImageBackground
            style={{height: 190,  borderStyle: 'solid', marginTop: 10,borderRadius: 10, overflow: 'hidden'}}
            resizeMode="cover"
            source={{uri: "https://www.loveusaha.com/wp-content/uploads/2020/03/Gambar3.png"}}
          />
          <View style={{marginTop:10}}>
            <Text>6Km</Text>
            <Text>Bakso Solo Karanglo</Text>
          </View>
        </View>
        <View style={styles.card_jempolan}>
          <ImageBackground
            style={{height: 190,  borderStyle: 'solid', marginTop: 10,borderRadius: 10, overflow: 'hidden'}}
            resizeMode="cover"
            source={{uri: "https://www.loveusaha.com/wp-content/uploads/2020/03/Gambar3.png"}}
          />
          <View style={{marginTop:10}}>
            <Text>6Km</Text>
            <Text>Bakso Solo Karanglo</Text>
          </View>
        </View>
        <View style={styles.card_jempolan}>
          <ImageBackground
            style={{height: 190,  borderStyle: 'solid', marginTop: 10,borderRadius: 10, overflow: 'hidden'}}
            resizeMode="cover"
            source={{uri: "https://www.loveusaha.com/wp-content/uploads/2020/03/Gambar3.png"}}
          />
          <View style={{marginTop:10}}>
            <Text>6Km</Text>
            <Text>Bakso Solo Karanglo</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  </View>
}
