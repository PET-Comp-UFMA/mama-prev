import React from 'react'
import { View,ScrollView, Text, TouchableOpacity,StyleSheet} from 'react-native'
const SearchDropdown = (props) => {
    let {filtered, setValue, setSearching} = props
    return (
        <View>
            <ScrollView>
                {filtered.map(item => {
                    return (
                        <TouchableOpacity 
                            style={styles.options}
                            key={item.id} 
                            onPress={() => {
                                setValue(item.name) 
                                setSearching(false)
                            }
                            }>
                                <Text>{item.name}</Text>
                        </TouchableOpacity>
                            )
                })}
            </ ScrollView> 
        </View>
                        
                        
            
    )}
    const styles = StyleSheet.create({
        options: {
            padding: 15,
            borderColor: "black",
            borderWidth: 1,
            borderRadius:6,
            paddingHorizontal: 55
        }
    }
                
        )

export default SearchDropdown