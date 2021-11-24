// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'

const Separator = () => (
    <View style={styles.separator} />
  );

class FilmItem extends React.Component {

    _displayFavoriteImage() {
        if (this.props.isFilmFavorite) {
            console.log("pas d'image")
          // Si la props isFilmFavorite vaut true, on affiche le 🖤
          return (
              <>
            {console.log("image")}
            <Image
              style={styles.favorite_image}
              source={require('../Images/black_fav.png')}
            />
            </>
          )
        }
      }
    
    render() {
        const {film, displayDetailForFilm} = this.props
        return (
        <>
            <TouchableOpacity
            onPress={() => displayDetailForFilm(film.id)}>
                <View style={styles.main_content} onPress={() => navigation.navigate('Details')}> 
                    <View style={{flex: 2}}>
                        <Image style={styles.images} source={{uri: getImageFromApi(film.poster_path)}}/>
                    </View>
                    <View style={styles.second_content}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                            {this._displayFavoriteImage()}
                            <Text style={styles.title_text}>{film.title}</Text>
                            <Text style={styles.vote_text}>{film.vote_average}</Text>
                        </View>
                        <View style={{flex: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                            <Text style={styles.description_text} numberOfLines={4}>{film.overview}</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <Separator />
        </>
        )
    }
}

const styles = StyleSheet.create({
    main_content:{
        flex: 1,
        flexDirection: 'row',
        margin: 10
    },
    second_content:{
        flex: 4,
        marginLeft: 10,
        marginRight: 5
    },
    images: {
        height: 150,
        width: 120
    },
    title_text: {
        fontWeight: "bold",
        fontSize: 18,
        padding: 5,
        
    },
    vote_text: {
        padding: 5,
    },
    description_text: {
        padding: 5,
    },
    date_text: {
        padding: 5,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

})

export default FilmItem