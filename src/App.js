import React from "react";
import './App.css';
import _ from 'lodash';
import {
  Button,
  Stack,
  Heading,
  Grid,
  GridItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from "@chakra-ui/react";
import { FaPlusCircle } from 'react-icons/fa';
import {pokeData} from './data';
import TrackItem from './TrackItem';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracker: null
    }
  }

  componentDidMount() {
    const tracker = localStorage.getItem("tracker") || [];

    this.setState({tracker});
  }

  addCatch = () => {
    const { tracker } = this.state;
    tracker.push({uid: Math.floor((Math.random() * 1000) + 1)});
    this.setState({tracker})
  }

  onRouteChange = (e, uid) => {
    const { tracker } = this.state;
    const i = _.findIndex(tracker, {'uid': uid})
    tracker[i].route = e.value;
    this.setState({tracker});
  }

  onPokemonChange = (e, uid) => {
    const { tracker } = this.state;
    const i = _.findIndex(tracker, {'uid': uid})
    tracker[i].pokemon = e.value;
    this.setState({tracker});
  }

  onRemove = (uid) => {
    const { tracker } = this.state;
    const i = _.findIndex(tracker, {'uid': uid})
    tracker.splice(i, 1);
    this.setState({tracker});
  }
  
  render() {
    const { tracker } = this.state;
    const PokemonList = props => {
      return (
        <ul>
          {
            props.tracker && props.tracker.map((catches, i) => {
              return (
                <TrackItem
                  tracker={tracker}
                  pokeData={pokeData}
                  uid={catches.uid}
                  route={catches.route}
                  pokemon={catches.pokemon}
                  onRouteChange={this.onRouteChange}
                  onPokemonChange={this.onPokemonChange}
                  onRemove={this.onRemove}
                  key={i}
                />
              );
            })
          }
        </ul>
      )
    };

    return (
      <React.Fragment>
        <div style={{"padding": "10px 15px"}}>
          <Heading>
            Nuzlocke Tracker
          </Heading>
        </div>
        <Tabs>
          <TabList>
            <Tab>Tracker</Tab>
            <Tab>Available Pokemon</Tab>
            <Tab>TBD</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Grid
                templateColumns="repeat(5, 1fr)"
                gap={4}
              >
                <GridItem colSpan={5}>
                  <Stack direction="row" spacing={4}>
                    <Button 
                      leftIcon={<FaPlusCircle />}
                      colorScheme="blue" size="sm"
                      onClick={this.addCatch}>
                      Add Catch
                    </Button>
                  </Stack>
                </GridItem>
                <GridItem colSpan={3}>
                  <PokemonList tracker={tracker} />
                </GridItem>
                <GridItem colSpan={2}>
                </GridItem>
              </Grid>
            </TabPanel>
            <TabPanel>
              <p>TBD</p>
            </TabPanel>
            <TabPanel>
              <p>TBD</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </React.Fragment>
    );
  }
}

export default App;
