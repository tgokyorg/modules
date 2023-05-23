import React from "react";


export const Decoration = {

    containerx: {
     backgroundColor: "lightblue", 
     flex: 1, 
     width: 500
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    
      },
      bottomSheet: {
        backgroundColor: 'green', // Set the desired gray color
      },
      content: {
        padding: 16,
      },
      handleIndictor: {
        backgroundColor: 'gray', 
        width: 100
      },
      handleIndicatorContainer: {
         marginTop: 10, 
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'center', 
      },
      mins: {
        fontSize: 20,
        fontWeight: "600",
        paddingBottom: 5,
        left: 30
      },

      restaurantNameStyle: {
        fontSize: 25,  paddingVertical: 20, right: -170, fontWeight: '500', top: -15
      },

      buttonShit: {
        
          position: 'absolute',
          bottom: 20,
          left: '40%',
          transform: [{ translateX: -100 }],
          backgroundColor: '#3FC060',
          borderRadius: 20,
          marginBottom: 20,
          paddingVertical: 10,
          paddingHorizontal: 20,
          marginVertical: 10,
          width: 200
      
        
      }
    };

    export default Decoration;