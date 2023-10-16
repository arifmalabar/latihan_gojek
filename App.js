import React, {Component} from 'react';
import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Wallet2, ArrowSquareUp, Note, Menu, Car, Broom, Box, ShoppingCart, NoteFavorite, ShoppingBag, User, SearchNormal1} from 'iconsax-react-native';
export default function App()
{
  return (
    <View>
      <Header/>
      <ScrollView>
        <ImageBackground
          style={styles.large}
          resizeMode="cover"
          source={require('./assets/jumbotron.jpg')} />
        <Bayar/>
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
      </ScrollView>
    </View>
  );
}
const Bayar = () => {
  return (
    <View style={styles.bayar}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.card_icons}>
          <Wallet2
              color="#03b0d7"
              variant="Bold"
              size={20}
            />
        </View>
        <View style={{ flexDirection:'column', marginLeft: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 15, color: "black"}}>Rp 0</Text>
          <Text style={{ fontSize: 12 }}>0 Coins</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.icon_button}>
          <ArrowSquareUp
            color="#03b0d7"
            variant="Bold"
            size={20}
          />
          <Text>Bayar</Text>
        </View>
        <View style={styles.icon_button}>
          <Note
            color="#03b0d7"
            size={20}
            variant="Bold"
          />
          <Text>Riwayat</Text>
        </View>
        <View style={styles.icon_button}>
          <Menu
            color="#03b0d7"
            variant="Bold"
            size={20}
          />
          <Text>Lainya</Text>
        </View>
      </View>
    </View>
  );
}
const Header = () => {
  return (
    <View style={headStyle.main}>
      <View>
        <View style={headStyle.search}>
          <View>
          <SearchNormal1
          size="20"
          color="#494949"
          />
          </View>
          <Text style={{marginLeft:20}}>Cari layanan, makanan & tujuan</Text>
        </View>
      </View>
      <View>
        <View style={headStyle.user_circle}>
        <User
          size="20"
          color="#018c00"
          variant="Bold"
          />
        </View>
      </View>
    </View>
  );
}
const MainBody = () => {
  <ScrollView>
    <View>
      <Image
        style={{width: '100%', height: '50%'}}
        source={require('./assets/jumbotron.jpg')} />
    </View>
    <View>
      <View>
        <View><Text>asas</Text></View>
      </View>
    </View>
  </ScrollView>
}
const headStyle = StyleSheet.create({
  main: {
    justifyContent: 'space-between', 
    flexDirection: "row",
    padding: 12,
    borderEndColor: "#f7f7f7",
    borderStyle: 'solid',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  search:{
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: "#A4A4A4",
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#f7f7f7",
    width: 300
  },
  user_circle : {
    borderColor: "#A4A4A4",
    padding: 12,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 20,

  }
});
const styles = StyleSheet.create({
  
  large: {
    width: '100%',
    height: 150,
  },
  bayar: {
    margin: 20,
    padding: 5,
    backgroundColor: "white",
    height: 60,
    marginTop: -30,
    borderRadius: 10,
    borderColor: "#F6F6F6",
    borderStyle:'solid',
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    justifyContent: 'space-between',
    flexDirection: 'row'
  }, 
  wallet :{
    flexDirection: 'row',
  },
  card_icons : {
    backgroundColor: "#eeeeee",
    borderRadius: 30, 
    padding: 10
  }, 
  icon_button: {
    flexDirection: "column",
    alignItems: "center", 
    marginLeft: 10
  },
  icon_menu: {
    flexDirection: "column",
    alignItems: "center", 
    marginLeft: 10,
    marginRight: 30
  },
  container : {
    marginTop: 20
  },
  title:{
    color: "black",
    fontSize: 20, 
    fontWeight: "bold",
  },
  card_jempolan: {
    marginTop: 20,
    borderEndColor: "#F6F6F6",
    borderStyle: 'solid',
    borderRadius: 10,
    width:200,
    height: 300, 
    marginLeft: 10,
    marginRight: 20
  }
});