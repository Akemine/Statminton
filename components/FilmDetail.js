// Components/FilmDetail.js

import React from 'react'
import { StyleSheet, View, ActivityIndicator, Text, Image, ScrollView, TouchableOpacity  } from 'react-native'
import {getFilmDetailFromApi, getImageFromApi} from '../API/TMDBApi'

import { connect } from 'react-redux'

class FilmDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      film: undefined, // Pour l'instant on n'a pas les infos du film, on initialise donc le film à undefined.
      isLoading: true // A l'ouverture de la vue, on affiche le chargement, le temps de récupérer le détail du film
    }
  }

  _toggleFavorite() {
    const action = { type: "TOGGLE_FAVORITE", value: this.state.film }
    this.props.dispatch(action)
  }

  _displayFavoriteImage() {
    var sourceImage = require('../Images/white_fav.png')
    if (this.props.favoritesFilm.findIndex(item => item.id === this.state.film.id) !== -1) {
      // Film dans nos favoris
      sourceImage = require('../Images/black_fav.png')
    }
    return (
      <Image
        style={styles.favorite_image}
        source={sourceImage}
      />
    )
  }

  _displayLoading() {
    if (this.state.isLoading) {
      // Si isLoading vaut true, on affiche le chargement à l'écran
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" color="black"/>
        </View>
      )
    }
    else {
      return (
        <ScrollView style={styles.scrollview_container}>
          <Text>{this.state.film.title}</Text>
          <TouchableOpacity
              style={styles.favorite_container}
              onPress={() => this._toggleFavorite()}>
              {this._displayFavoriteImage()}
          </TouchableOpacity>
          <Image style={styles.images} source={{uri: getImageFromApi(this.state.film.poster_path)}}/>
          <Image style={styles.images} source={{uri: getImageFromApi(this.state.film.poster_path)}}/>
          <Image style={styles.images} source={{uri: getImageFromApi(this.state.film.poster_path)}}/>
          <Image style={styles.images} source={{uri: getImageFromApi(this.state.film.poster_path)}}/>
          <Image style={styles.images} source={{uri: getImageFromApi(this.state.film.poster_path)}}/>
          <Image style={styles.images} source={{uri: getImageFromApi(this.state.film.poster_path)}}/>
        </ScrollView>
      )
    }
  }

  componentDidMount() {
    getFilmDetailFromApi(this.props.route.params.idFilm).then(data => {
      this.setState({
        film: data,
        isLoading: false
      })
    })
  }

  componentDidUpdate() {
    console.log("componentDidUpdate : ")
    console.log(this.props.favoritesFilm)
  }

  render() {
    return (
        <View style={styles.main_container}>
          {this._displayLoading()}
        </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },    
  images: {
    height: 300,
    width: 250,
    borderRadius: 10,
    margin: 20
  },
  scrollview_container: {
    flex: 1
  },
  favorite_container: {
    alignItems: 'center', // Alignement des components enfants sur l'axe secondaire, X ici
  },
  favorite_image: {
    width: 40,
    height: 40
  }
})

const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}

export default connect(mapStateToProps)(FilmDetail)