import {expect} from 'chai';

import {List, Map} from 'immutable';

describe('immutability', () => {

    describe('a number', () => {

        function increment(currentState) {
            return currentState + 1;
        }

        it('is immutable', () => {
            let state = 42;
            let nextState = increment(state);

            expect(nextState).to.equal(43);
            expect(state).to.equal(42);
        });

    });


    describe('A List', () => {

        function addMovie(currentState, movie) {
            return currentState.push(movie);
        }

        it('is immutable', () => {
            let state = List.of('Con Air', 'Gone In 60 Seconds');
            let nextState = addMovie(state, 'Matchstick Men');

            expect(nextState).to.equal(List.of(
                'Con Air',
                'Gone In 60 Seconds',
                'Matchstick Men'
            ));
            expect(state).to.equal(List.of(
                'Con Air',
                'Gone In 60 Seconds'
            ));
        });

    });
    describe('a tree', () => {

        function addMovie(currentState, movie) {
            return currentState.set(
                'movies',
                currentState.get('movies').push(movie)
            );
        }

        it('is immutable', () => {
            let state = Map({
                movies: List.of('Con Air', 'Gone In 60 Seconds')
            });
            let nextState = addMovie(state, 'Matchstick Men');

            expect(nextState).to.equal(Map({
                movies: List.of(
                    'Con Air',
                    'Gone In 60 Seconds',
                    'Matchstick Men'
                )
            }));
            expect(state).to.equal(Map({
                movies: List.of(
                    'Con Air',
                    'Gone In 60 Seconds'
                )
            }));
        });

    });
});
