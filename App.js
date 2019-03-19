/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { 
  SafeAreaView, 
  Text, 
  View,
  TouchableOpacity,
  Image,
  Modal,
  TouchableWithoutFeedback
} from 'react-native';
const question = [  
     {  
        "id":1,
        "question":"5 + 7 = ?",
        "options":[  
           {  
              "id":10,
              "value":"10",
              "image":"https://www.sheknows.com/wp-content/uploads/2018/08/rbrizfbdiy4yrc6pmcnk.jpeg"
           },
           {  
              "id":11,
              "value":"11",
              "image":"http://www.fitnesshealth101.com/images2/topics/weightloss/aerobics-jogging%20(260%20x%20260).jpg"
           },
           {  
              "id":12,
              "value":"12",
              "image":"http://upl.stack.com/wp-content/uploads/2017/02/03233010/Zercher-Good-Morning.jpg"
           },
           {  
              "id":13,
              "value":"13",
              "image":"https://c.rjstatic.com/content/1355.jpg"
           }
        ],
        "answer":11
     },
     {  
        "id":2,
        "question":"5 - 1 = ?",
        "options":[  
           {  
              "id":10,
              "value":"4",
              "image":"https://amp.businessinsider.com/images/5b747d042be4ab1a008b5313-1920-960.jpg"
           },
           {  
              "id":11,
              "value":"3",
              "image":"https://www.bhliveactive.org.uk/wp-content/uploads/2015/07/centreweights-1024x337.jpg"
           },
           {  
              "id":12,
              "value":"6",
              "image":"https://img.grouponcdn.com/deal/3YLiFuy3xreSDGpMTD8Uf9fy8LdK/3Y-2048x1229/v1/c700x420.jpg"
           },
           {  
              "id":13,
              "value":"8",
              "image":"http://www.naim.org.il/wp-content/uploads/2014/12/low-cost-gym.jpg"
           }
        ],
        "answer":10
     },
     {  
        "id":3,
        "question":"7 % 2 = ?",
        "options":[  
           {  
              "id":10,
              "value":"0",
              "image":"http://5stepmarketing.com/web/wp-content/uploads/2017/08/gym-owner.jpg"
           },
           {  
              "id":11,
              "value":"1",
              "image":"https://image.boxrox.com/2018/07/Brooke-Wells-CrossFit-Chest-to-Bar-Pull-Ups.png"
           },
           {  
              "id":12,
              "value":"2",
              "image":"https://www.gymclothes.com/wp-content/themes/gymclothing/images/fitness-clothes-wholesale.jpg"
           },
           {  
              "id":13,
              "value":"3",
              "image":"https://www.abc.net.au/radionational/image/6336432-3x2-700x467.jpg"
           }
        ],
        "answer":11
     }
  ]



export default class App extends Component {

constructor(props){
    super(props);
    this.state = {
      questionNo:0,
      selectedIndex:0,
      popupModel:false
    }
}


renderPopupModal() {
  return(
      <View style={{ alignSelf: 'center',justifyContent: 'center',backgroundColor:'white',borderRadius:5 }}>
      <View style={{ marginHorizontal: 10, marginVertical: 10, justifyContent:'center',alignItems:'center'}}>
      <Image style={{ height: 40, width: 40, zIndex: 5 }}
                          resizeMode='contain'
                          source={require('./assets/check_circle.png')}
                        />
              <Text style={{fontSize: 16, color: '#000000', fontWeight: '600', marginVertical: 10, alignSelf: 'center',textAlign:'center'}}>
             {"That's the \nCorrect Answer"}
              </Text>
              </View>
      </View>
  )
}

  render() {
    return (

      <SafeAreaView style={{flex: 1}}>
      <View style={{ backgroundColor:'rgb(227,71,34)', alignItems:'center', justifyContent:'center', flex: 1 }}>
        <Text style={{ color:'white'}}>QUESTIONS</Text>
      </View>

      <View style={{ backgroundColor:'rgb(241,241,241)' , flex: 10}}>
      {/* Question Text */}
      <View style={{ flex: 10, marginHorizontal: 10 }}>
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <Text> {question[this.state.questionNo].question}</Text>
       </View>

{/* Question Options */}
        <View style={{ flex: 6, marginBottom: 5 }}>
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around'}}>
          {/* Option 1 */}
            <TouchableOpacity style={{ backgroundColor:'rgb(255,255,255)', flex: 1, margin: 5 }}
            onPress = { ()=>{
                this.setState({ selectedIndex:question[this.state.questionNo].options[0].id })
              }
            }
            >
             <Image style={{ height: 20, width: 20, position: 'absolute', zIndex: 5,top: 5,alignSelf:'flex-start', left: 5 }}
                          resizeMode='contain'
                          source={ (this.state.selectedIndex == question[this.state.questionNo].options[0].id) ? require('./assets/check_circle.png') : require('./assets/uncheck.png')}
                        />

              <Image style={{ justifyContent: 'center', alignItems:'center', flex: 6}}
                      source={{ uri: question[this.state.questionNo].options[0].image }}
              />
              <View style={{ flex:1, justifyContent:'center', marginHorizontal:5 }}>
                <Text
                >{question[this.state.questionNo].options[0].value}</Text>
              </View>
              </TouchableOpacity>

{/* Option 2 */}
             <TouchableOpacity style={{ backgroundColor:'rgb(255,255,255)', flex: 1, margin: 5 }}
             onPress = { ()=>{
              this.setState({ selectedIndex:question[this.state.questionNo].options[1].id })
            }
          }
             >
              <Image style={{ height: 20, width: 20, position: 'absolute', zIndex: 5,top: 5,alignSelf:'flex-start', left: 5 }}
                          resizeMode='contain'
                          source={(this.state.selectedIndex == question[this.state.questionNo].options[1].id) ? require('./assets/check_circle.png') : require('./assets/uncheck.png')}
                        />
             <Image style={{ justifyContent: 'center', alignItems:'center', flex: 6 }}
                      source={{ uri: question[this.state.questionNo].options[1].image }}
                    />
                    <View style={{ flex:1, justifyContent:'center', marginHorizontal:5 }}>
                      <Text>{question[this.state.questionNo].options[1].value}</Text>
                     
                     </View>
                     </TouchableOpacity>
             </View>

          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around'}}>
          {/* option 3 */}
             <TouchableOpacity style={{ backgroundColor:'rgb(255,255,255)', flex: 1, margin: 5 }}
             onPress = { ()=>{
              this.setState({ selectedIndex:question[this.state.questionNo].options[2].id })
            }
          }
             >
              <Image style={{ height: 20, width: 20, position: 'absolute', zIndex: 5,top: 5,alignSelf:'flex-start', left: 5 }}
                          resizeMode='contain'
                          source={(this.state.selectedIndex == question[this.state.questionNo].options[2].id) ? require('./assets/check_circle.png') : require('./assets/uncheck.png')}
                        />
             <Image style={{ justifyContent: 'center', alignItems:'center', flex: 6}}
                      source={{ uri: question[this.state.questionNo].options[2].image }}
                    />
                    <View style={{ flex:1,justifyContent:'center', marginHorizontal:5 }}>
                <Text>{question[this.state.questionNo].options[2].value}</Text>
              </View>
              </TouchableOpacity>
{/* Option 4 */}
            <TouchableOpacity style={{ backgroundColor:'rgb(255,255,255)', flex: 1, margin: 5 }}
            onPress = { ()=>{
              this.setState({ selectedIndex:question[this.state.questionNo].options[3].id })
            }
          }
            >
              <Image style={{ height: 20, width: 20, position: 'absolute', zIndex: 5,top: 5,alignSelf:'flex-start', left: 5 }}
                          resizeMode='contain'
                          source={(this.state.selectedIndex == question[this.state.questionNo].options[3].id) ? require('./assets/check_circle.png') : require('./assets/uncheck.png')}
                        />
             <Image style={{ justifyContent: 'center', alignItems:'center', flex: 6}}
                      source={{ uri: question[this.state.questionNo].options[3].image }}
                    />
                    <View style={{ flex:1,justifyContent:'center', marginHorizontal:5 }}>
                <Text>{question[this.state.questionNo].options[3].value}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </View>

      <TouchableOpacity style={{ alignItems:'center', justifyContent:'center', backgroundColor: ( this.state.selectedIndex == 0) ? 'rgb(204,204,204)' : 'rgb(227,71,34)', flex: 1 }}
      disabled={( this.state.selectedIndex == 0) ? true : false}
      onPress={()=>{
        if(question[this.state.questionNo].answer === this.state.selectedIndex){
          this.setState({popupModel:true})
        }
      }}
      >
        <Text style={{ color: 'white'}}>CHECK </Text>
      </ TouchableOpacity>

      </View>

      <Modal animationType="fade" transparent={true} visible={this.state.popupModel ? true : false}>
                    <TouchableWithoutFeedback onPress={() => {
                         this.setState({popupModel: false,questionNo:(this.state.questionNo === 2)? 0 : this.state.questionNo + 1, selectedIndex:0 })
                    }}>
                        <View style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(0,0,0,0.67)'
                        }}>
                            <TouchableWithoutFeedback>
                                {this.renderPopupModal()}
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>

     </SafeAreaView>
    );
  }
}


