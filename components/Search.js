import React from 'react'
import { StyleSheet, View, TextInput, ActivityIndicator, FlatList, Button } from 'react-native'
import { getFilmsFromApiWithSearchedText } from '../API/IMDBApi'
import { connect } from 'react-redux'

import FilmItem from './FilmItem'



class Search extends React.Component {

  constructor(props) {
    super(props)
    this.searchInput = ""
    this.page = 0,
    this.totalPages = 0
    this.state = {
      films: [],
      isLoading : false
    }
  }

  _displayDetailForFilm = (idFilm) => {
    this.props.navigation.navigate("Detail", {idFilm: idFilm})
  }

  _searchTextInputChanged(text){
    this.searchInput = text
    this.page = 0
    this.totalPages = 0
    this.setState({
      films: []
    })
    this._loadFilms()
    
  }

  _loadFilms() {
    if(this.searchInput.length > 0){
      this.setState({ isLoading: true }) // Lancement du chargement
      getFilmsFromApiWithSearchedText(this.searchInput, this.page+1).then(data => {
        this.page = data.page
        this.totalPages = data.total_pages
        this.setState({ 
          isLoading: false,
          films: this.state.films.concat(data.results)
         }) // Lancement du chargement
      })
    }
  }

  _searchFilms() {
    this.page = 0
    this.totalPages = 0
    this.setState({
      films: []
    })
    this._loadFilms()
  }  

  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder='Titre du film' onChangeText={(text) => this._searchTextInputChanged(text)} onSubmitEditing={() => this._searchFilms()}/>
        {/* <SearchButton onPress={() => this._loadFilms()}/> */}
        <FlatList
          data={this.state.films}
          extraData={this.props.favoritesFilm}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item}) => <FilmItem displayDetailForFilm={this._displayDetailForFilm} isFilmFavorite={(this.props.favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false} film={item}/>}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if(this.page < this.totalPages){
              this._loadFilms()
            }
          }}
        />
        { this.state.isLoading ?
          <View style={styles.loading_container}>
            <ActivityIndicator size="large" color="black" />
          </View>
            : null
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 10
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
    borderRadius: 4,
    marginBottom: 10
  },
  button:{
    margin: 5
  },  
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const mapStateToProps = state => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}

export default connect(mapStateToProps)(Search)