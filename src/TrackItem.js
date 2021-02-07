import React from 'react';
import CreatableSelect from 'react-select/creatable'
import _ from 'lodash';
import {IconButton , Grid, GridItem} from "@chakra-ui/react";
import { FaWindowClose } from 'react-icons/fa';

import {pokeData} from './data';


class TrackItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            route: null,
            pokemon: null
        }
    }

    componentDidMount() {
        const { route, pokemon } = this.props;

        this.setState({
            route,
            pokemon
        })
    }

    onRouteChange = (e) => {
        const {onRouteChange, uid} = this.props;
        const value = typeof e === "string" ? {value: e} : e;
        this.setState({route: value.value});
        // TODO: Check for if it is a function. Could err otherwise.
        if (onRouteChange) {
            onRouteChange(value, uid);
        }

        return false;
    }

    onPokemonChange = (e) => {
        const {onPokemonChange, uid} = this.props;
        const value = typeof e === "string" ? {value: e} : e.value;
        this.setState({pokemon: value.value});
        // TODO: Check for if it is a function. Could err otherwise.
        if (onPokemonChange) {
            onPokemonChange(value, uid);
        }

        return false;
    }

    onRemove = () => {
        const { onRemove, uid } = this.props;

        if (onRemove) {
            onRemove(uid);
        }

        return false;
    }

    render() {
        const { tracker } = this.props;
        const { route, pokemon } = this.state;
        const trackerRoutes = _.map(tracker, (item) => (item.route));
        const trackerPokemon = _.map(tracker, (item) => (item.pokemon));
        const findRouteName = (route) => {
            return route.name;
        }
        const findPokemonNames = (route) => {
            if (route.name == this.state.route) {
                return [_.flatMap(route.pokemon, (pokemon) => (pokemon.name))];
            }
            return [];
        }
        let pokemonOptions;

        const routeOptions = _.map(_.remove(_.flatMap(pokeData, findRouteName), (routeName) => {
            return _.indexOf(trackerRoutes, routeName) === -1;
        }), (name) => {
            return {value: name, label: name};
        });

        if (route && (!pokemon)) {
            // TODO: omit with current list of routes that have catches.
            pokemonOptions = _.flatMap(_.flatMap(pokeData, findPokemonNames), (names) => {
                return _.remove(names, (name) => {
                    return _.indexOf(trackerPokemon, name) === -1;
                }).map((name) => {
                    return {value: name, label: name};
                });
            });

            pokemonOptions.unshift({value: "Killed", label: "Killed"});
        }
        return (
            <Grid templateColumns="repeat(7, 1fr)" gap={6}>
                <GridItem colSpan={3}>
                    {route ? <span>{route}</span> :
                        <CreatableSelect
                            isSearchable={true}
                            onChange={this.onRouteChange}
                            onCreateOption={this.onRouteChange}
                            options={routeOptions}
                        />
                    }
                    
                </GridItem>
                <GridItem colSpan={3}>
                    {route ? 
                        pokemon ? 
                            <span>{pokemon}</span>:
                            <CreatableSelect 
                                onChange={this.onPokemonChange}
                                onCreateOption={this.onPokemonChange}
                                options={pokemonOptions}
                                value={"test"}
                            />
                        : null
                    }
                </GridItem>
                {
                    route && pokemon && <GridItem colSpan={1}><IconButton onClick={this.onRemove} variant="ghost" colorScheme="red" aria-label="Delete" icon={<FaWindowClose />} /></GridItem>
                }
            </Grid>
        )
    }
}

export default TrackItem;