import React, {useState, useRef} from 'react'
import Draggable from 'react-native-draggable';
import { StyleSheet, View, Animated, PanResponder, SafeAreaView, TouchableOpacity, TouchableHighlight } from 'react-native'


const Grille = () => {

  const [timestampAtPress, setStateTimestampAtPress] = useState(0);

  function _getTimeStampAtPress(e, ){
    // setStateTimestampAtPress(e.nativeEvent.timestamp)
  }
  
  function _getDataFromDrag(e){
    // var timestamp = e.nativeEvent.timestamp - timestampAtPress
    // console.log("Pos X : " + e.nativeEvent.locationX)
    // console.log("Pos Y : " + e.nativeEvent.locationY)
    // console.log("temps du drag n drop : " + timestamp)
    // console.log("ID : " + e.nativeEvent.identifier)
    // console.log("target : " + e.nativeEvent.target)
  }

  function _handlePress(evt){
    console.log(`x coord = ${evt.nativeEvent.locationX}`);
    console.log(`y coord = ${evt.nativeEvent.locationY}`);
    console.log("------")
  }

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
        ]
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  ).current;


    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'yellow'}}>
         
        {/* TERRAIN DU HAUT */}
      
          <View style={{flex: 2.5, flexDirection: 'row', marginLeft: 30, marginRight: 30, marginTop: 40}}>
              {/* TOP TOP - 1*/}
            <View style={styles.casesTopNoBg}> 
                <Draggable renderSize={70} renderColor='black' renderText='TOP MID LEFT'  shouldReverse onPressIn={(e) => _getTimeStampAtPress(e)} onDragRelease={(e) => _handlePress(e)}/>
            </View>    
            <View style={styles.casesTopNoBg}>
              <Draggable renderSize={70} renderColor='black' renderText='TOP MID LEFT'  shouldReverse onPressIn={(e) => _getTimeStampAtPress(e)} onDragRelease={(e) => _handlePress(e)}/>
            </View>          
            <View style={styles.casesTopNoBg}>
              <Draggable renderSize={70} renderColor='black' renderText='TOP MID RIGHT'  shouldReverse onPressIn={(e) => _getTimeStampAtPress(e)} onDragRelease={(e) => _handlePress(e)}/>
            </View>          
            <View style={styles.casesTopNoBg}>
              <Draggable renderSize={70} renderColor='black' renderText='TOP RIGHT'  shouldReverse onPressIn={(e) => _getTimeStampAtPress(e)} onDragRelease={(e) => _handlePress(e)}/>
            </View>
          </View>
          
          <View style={{ flex: 2.5, flexDirection: 'row', marginLeft: 30, marginRight: 30}}>
            {/* MID TOP - 2 */}
            <View style={styles.casesMidNoBg}>
              <Draggable renderSize={70} renderColor='black' renderText=' LEFT'  shouldReverse onPressIn={(e) => _getTimeStampAtPress(e)} onDragRelease={(e) => _getDataFromDrag(e)}/>
            </View>
            <View style={styles.casesMidNoBg}>
              <Draggable renderSize={70} renderColor='black' renderText=' MID LEFT'  shouldReverse onPressIn={(e) => _getTimeStampAtPress(e)} onDragRelease={(e) => _getDataFromDrag(e)}/>
            </View>          
            <View style={styles.casesMidNoBg}>
              <Draggable renderSize={70} renderColor='black' renderText=' MID RIGHT'  shouldReverse onPressIn={(e) => _getTimeStampAtPress(e)} onDragRelease={(e) => _getDataFromDrag(e)}/>
            </View>          
            <View style={styles.casesMidNoBg}>
              <Draggable renderSize={70} renderColor='black' renderText=' RIGHT'  shouldReverse onPressIn={(e) => _getTimeStampAtPress(e)} onDragRelease={(e) => _getDataFromDrag(e)}/>
            </View>
          </View>
          <View style={{ flex: 2.5, flexDirection: 'row', marginLeft: 30, marginRight: 30}}>
            {/* LOW TOP -3 */}
            <View style={styles.casesMidNoBg}>
              <Draggable renderSize={70} renderColor='black' renderText=' LEFT'  shouldReverse onPressIn={(e) => _getTimeStampAtPress(e)} onDragRelease={(e) => _getDataFromDrag(e)}/>
            </View>
            <View style={styles.casesMidNoBg}>
              <Draggable renderSize={70} renderColor='black' renderText=' MID LEFT'  shouldReverse onPressIn={(e) => _getTimeStampAtPress(e)} onDragRelease={(e) => _getDataFromDrag(e)}/>
            </View>          
            <View style={styles.casesMidNoBg}>
              <Draggable renderSize={70} renderColor='black' renderText=' MID RIGHT'  shouldReverse onPressIn={(e) => _getTimeStampAtPress(e)} onDragRelease={(e) => _getDataFromDrag(e)}/>
            </View>          
            <View style={styles.casesMidNoBg}>
              <Draggable renderSize={70} renderColor='black' renderText=' RIGHT'  shouldReverse onPressIn={(e) => _getTimeStampAtPress(e)} onDragRelease={(e) => _getDataFromDrag(e)}/>
            </View>
          </View>
          <View style={{ flex: 2.5, flexDirection: 'row', marginLeft: 30, marginRight: 30, marginBottom: 5}}>
            {/* LOW - 4*/}
            <View style={styles.casesMidNoBg}>
              <Draggable renderSize={70} renderColor='black' renderText='BOT LEFT'  shouldReverse onPressIn={(e) => _getTimeStampAtPress(e)} onDragRelease={(e) => _getDataFromDrag(e)}/>
            </View>
            <View style={styles.casesMidNoBg}>
              <Draggable renderSize={70} renderColor='black' renderText='BOT MID LEFT'  shouldReverse onPressIn={(e) => _getTimeStampAtPress(e)} onDragRelease={(e) => _getDataFromDrag(e)}/>
            </View>          
            <View style={styles.casesMidNoBg}>
              <Draggable renderSize={70} renderColor='black' renderText='BOT MID RIGHT'  shouldReverse onPressIn={(e) => _getTimeStampAtPress(e)} onDragRelease={(e) => _getDataFromDrag(e)}/>
            </View>          
            <View style={styles.casesMidNoBg}>
              <Draggable renderSize={70} renderColor='black' renderText='BOT RIGHT'  shouldReverse onPressIn={(e) => _getTimeStampAtPress(e)} onDragRelease={(e) => _getDataFromDrag(e)}/>
            </View>
          </View>
          {/* TERRAIN DU BAS */}
          <View style={{ flex: 3, flexDirection: 'row', marginLeft: 30, marginRight: 30, marginTop: 5}}>
            {/* TOP BOTTOM - 5*/}
            

              <TouchableHighlight style={{flex: 1, backgroundColor: "pink"}} underlayColor="black" onPress={() => {}}>
                <Draggable renderSize={70} renderText='A' isSquare disabled/>
              </TouchableHighlight>

              
              <View style={styles.casesMid}>
              {/* <Draggable renderSize={70}  renderText='B' isSquare disabled /> */}
              </View>    
            <View style={styles.casesMid}>
              {/* <Draggable renderSize={70}  renderText='C' isSquare disabled/> */}
            </View>          
            <View style={styles.casesMid}>
              {/* <Draggable renderSize={70}  renderText='D' isSquare disabled/> */}
            </View>
          </View>
          <View style={{ flex: 3, flexDirection: 'row', marginLeft: 30, marginRight: 30}}>
            {/* MID BOTTOM - 6*/}
            <View style={styles.casesMid}>
              {/* <Draggable renderSize={70} renderText='E' isSquare disabled/> */}
            </View>
            <View style={styles.casesMid}>
              {/* <Draggable renderSize={70}  renderText='F' isSquare disabled /> */}
            </View>          
            <View style={styles.casesMid}>
              {/* <Draggable renderSize={70}  renderText='G' isSquare disabled/> */}
            </View>          
            <View style={styles.casesMid}>
              {/* <Draggable renderSize={70}  renderText='H' isSquare disabled/> */}
            </View>
          </View>
          <View style={{ flex: 3, flexDirection: 'row', marginLeft: 30, marginRight: 30}}>
            {/* LOW BOTTOM - 7*/}
            <View style={styles.casesMid}>
              {/* <Draggable renderSize={70} renderText='I' isSquare disabled/> */}
            </View>
            <View style={styles.casesMid}>
              {/* <Draggable renderSize={70}  renderText='J' isSquare disabled /> */}
            </View>          
            <View style={styles.casesMid}>
              {/* <Draggable renderSize={70}  renderText='K' isSquare disabled/> */}
            </View>          
            <View style={styles.casesMid}>
              {/* <Draggable renderSize={70}  renderText='L' isSquare disabled/> */}
            </View>
          </View>
          <View style={{ flex: 3, flexDirection: 'row', marginLeft: 30, marginRight: 30, marginBottom: 30}}>
            {/* BOTTOM - 8*/}
            <View style={styles.casesTop}>
              {/* <Draggable renderSize={70} renderText='' isSquare disabled/> */}
            </View>
            <View style={styles.casesTop}>
              {/* <Draggable renderSize={70}  renderText='' isSquare disabled /> */}
            </View>          
            <View style={styles.casesTop}>
              {/* <Draggable renderSize={70}  renderText='' isSquare disabled/> */}
            </View>          
            <View style={styles.casesTop}>
              {/* <Draggable renderSize={70}  renderText='' isSquare disabled/> */}
            </View>
          </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
  casesTopNoBg: {
    flex: 1, 
    opacity: 0.5,
    borderRadius: 10
  },
  casesMidNoBg: {
    flex: 1,
    opacity: 0.5,
    borderRadius: 10
  },
  casesTop: {
    flex: 1,
    backgroundColor: "yellow",
    borderWidth: 1,
    opacity: 0.4, 
    borderRadius: 10
  },
  casesMid: {
    flex: 1,
    backgroundColor: "beige",
    borderWidth: 1,
    opacity: 0.4, 
    borderRadius: 10
  },
  casesMidTest:{
    flex: 1,
    borderWidth: 1,
    opacity: 0.4, 
    borderRadius: 10
  }
});

export default Grille