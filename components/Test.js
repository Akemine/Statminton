import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DraxProvider, DraxView, DraxList } from 'react-native-drax';

const gestureRootViewStyle = { flex: 1 };

export default function Test() {
  const draggableItemList = [
    {
      "id": 1,
      "name": "",
      "background_color": "#2057DF"
    },
    {
      "id": 2,
      "name": "",
      "background_color": "#2057DF"
    },
    {
      "id": 3,
      "name": "",
      "background_color": "#2057DF"

    },
    {
      "id": 4,
      "name": "",
      "background_color": "#2057DF"
    },
    {
      "id": 5,
      "name": "",
      "background_color": "#2057DF"
    },
    {
      "id": 6,
      "name": "",
      "background_color": "#2057DF"
    },
    {
      "id": 7,
      "name": "",
      "background_color": "#2057DF"

    },
    {
      "id": 8,
      "name": "",
      "background_color": "#2057DF"
    },
    {
      "id": 9,
      "name": "",
      "background_color": "#2057DF"
    },
    {
      "id": 10,
      "name": "",
      "background_color": "#2057DF"
    },
    {
      "id": 11,
      "name": "",
      "background_color": "#2057DF"

    },
    {
      "id": 12,
      "name": "",
      "background_color": "#2057DF"
    },    {
      "id": 13,
      "name": "",
      "background_color": "#2057DF"
    },    {
      "id": 14,
      "name": "",
      "background_color": "#2057DF"
    },    {
      "id": 15,
      "name": "",
      "background_color": "#2057DF"
    },    
    {
      "id": 16,
      "name": "",
      "background_color": "#2057DF"
    },

  ];
  const FirstReceivingItemList = [
    {
      "id": 17,
      "name": "",
      "background_color": "#D144BE",
      "compteur": 0
    },
    {
      "id": 18,
      "name": "",
      "background_color": "#D144BE",
      "compteur": 0
    },
    {
      "id": 19,
      "name": "",
      "background_color": "#D144BE",
      "compteur": 0
    },
    {
      "id": 20,
      "name": "",
      "background_color": "#D144BE",
      "compteur": 0
    },
    {
      "id": 21,
      "name": "",
      "background_color": "#D144BE",
      "compteur": 0
    },
    {
      "id": 22,
      "name": "",
      "background_color": "#D144BE",
      "compteur": 0
    },
    {
      "id": 23,
      "name": "",
      "background_color": "#D144BE",
      "compteur": 0
    },
    {
      "id": 24,
      "name": "",
      "background_color": "#D144BE",
      "compteur": 0
    },
    {
      "id": 25,
      "name": "",
      "background_color": "#D144BE",
      "compteur": 0
    },
    {
      "id": 26,
      "name": "",
      "background_color": "#D144BE",
      "compteur": 0
    },
    {
      "id": 27,
      "name": "",
      "background_color": "#D144BE",
      "compteur": 0
    },
    {
      "id": 28,
      "name": "",
      "background_color": "#D144BE",
      "compteur": 0
    },
    {
      "id": 29,
      "name": "",
      "background_color": "#D144BE",
      "compteur": 0
    },
    {
      "id": 30,
      "name": "",
      "background_color": "#D144BE",
      "compteur": 0
    },
    {
      "id": 31,
      "name": "",
      "background_color": "#D144BE",
      "compteur": 0
    },
    {
      "id": 32,
      "name": "",
      "background_color": "#D144BE",
      "compteur": 0
    }
  ];
  const DuplicateFirstReceivingItemList = [
    {
      "id": 17,
      "name": "",
      "background_color": "#D144BE"
    },
    {
      "id": 18,
      "name": "",
      "background_color": "#D144BE"
    },
    {
      "id": 19,
      "name": "",
      "background_color": "#D144BE"
    },
    {
      "id": 20,
      "name": "",
      "background_color": "#D144BE"
    },
    {
      "id": 21,
      "name": "",
      "background_color": "#D144BE"
    },
    {
      "id": 22,
      "name": "",
      "background_color": "#D144BE"
    },
    {
      "id": 23,
      "name": "",
      "background_color": "#D144BE"
    },
    {
      "id": 24,
      "name": "",
      "background_color": "#D144BE"
    },
    {
      "id": 25,
      "name": "",
      "background_color": "#D144BE"
    },
    {
      "id": 26,
      "name": "",
      "background_color": "#D144BE"
    },
    {
      "id": 27,
      "name": "",
      "background_color": "#D144BE"
    },
    {
      "id": 28,
      "name": "",
      "background_color": "#D144BE"
    },
    {
      "id": 29,
      "name": "",
      "background_color": "#D144BE"
    },
    {
      "id": 30,
      "name": "",
      "background_color": "#D144BE"
    },
    {
      "id": 31,
      "name": "",
      "background_color": "#D144BE"
    },
    {
      "id": 32,
      "name": "",
      "background_color": "#D144BE"
    }
  ];

  const [receivingItemList, setReceivedItemList] = React.useState(FirstReceivingItemList);
  const [dragItemMiddleList, setDragItemListMiddle] = React.useState(draggableItemList);
  

  function _handlePress(evt){
    console.log(`x coord = ${evt.nativeEvent.locationX}`);
    console.log(`y coord = ${evt.nativeEvent.locationY}`);
    console.log("------")
  }


  const DragUIComponent = ({ item, index }) => {
    return (
      <DraxView
        style={[styles.draggableBox, { backgroundColor: item.background_color }]}
        draggingStyle={styles.dragging}
        dragReleasedStyle={styles.dragging}
        hoverDraggingStyle={styles.hoverDragging}
        dragPayload={index}
        longPressDelay={0}
        key={index}
        onDragStart={() =>  {
          setReceivedItemList(DuplicateFirstReceivingItemList);
        }}   
      >
      </DraxView>
    );
  }

  const ReceivingZoneUIComponent = ({ item, index }) => {
    return (
      <DraxView
        style={[styles.receivingZone, { backgroundColor: item.background_color }]}
        receivingStyle={styles.receiving}
        renderContent={({ viewState }) => {
          const receivingDrag = viewState && viewState.receivingDrag;
          const payload = receivingDrag && receivingDrag.payload;
          return (
            <View>
            </View>
          );
        }}
        key={index}
        onReceiveDragDrop={(event) => {
          let selected_item = dragItemMiddleList[event.dragged.payload];
          let newReceivingItemList = [...receivingItemList];
          newReceivingItemList[index] = selected_item;
          setReceivedItemList(newReceivingItemList);

          // let newDragItemMiddleList = [...dragItemMiddleList];
          // newDragItemMiddleList[event.dragged.payload] = receivingItemList[index];
          // setDragItemListMiddle(newDragItemMiddleList);
        }}
      />
    );
  }

  const FlatListItemSeparator = () => {
    return (<View style={styles.itemSeparator} />);
  }
 
  return (
    <>
      <DraxProvider>
        <View style={styles.container}>
          <View style={styles.draxListContainer}>
            <DraxList
              data={dragItemMiddleList}
              renderItemContent={DragUIComponent}
              keyExtractor={(item, index) => index.toString()}
              numColumns={4}
              ItemSeparatorComponent={FlatListItemSeparator}
            />
          </View>
          
          <View style={styles.receivingZoneContent}>
              {receivingItemList.map((item, index) => ReceivingZoneUIComponent({ item, index }))}
          </View>
        </View>
      </DraxProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: "#85C1E9"
  },
  receivingZone: {
    height: (Dimensions.get('window').width / 5),
    width: (Dimensions.get('window').width / 5),

    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: "white",
    opacity: 0.7
  },
  receiving: {
    borderColor: 'black',
    backgroundColor: "#2057DF",
    borderWidth: 5,
  },
  draggableBox: {
    width: (Dimensions.get('window').width / 5),
    borderWidth: 2,
    borderColor: "white",
    height: (Dimensions.get('window').width / 5)
  },
  dragging: {
    opacity: 0.2,
  },
  hoverDragging: {
    borderColor: 'black',
    backgroundColor: "#2057DF",
    borderWidth: 2,
  },
  itemSeparator: {
    height: 0
  },
  draxListContainer: {
    height: '44%'
  },
  receivingZoneContent:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%'
  }
});