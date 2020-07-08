[![Build Status](https://travis-ci.org/wjn/fibonacci-calculator.svg?branch=master)](https://travis-ci.org/wjn/fibonacci-calculator)

# Fibonacci Calculator

An overly complex solution for the purpose of experimenting with deploying multiple docker containers.

**Purpose**: The over-complexity of this app is to facilitate learning how to deploy multi-container applications (more like real world apps) using docker in a continuous integration environment like Travis.

# Architecture

## Client

React app that takes an index and recursively calculates the fibonacci value for that index.

## nginx

Proxy server that routes requests to either the react server or the api

## server

The api used to store and retrieve values and previously calculated indicies in postgres and redis (unnecessary but part of the exercise to learn multi-container docker deployment).

## worker

The service that does the recurcive calculation.

# Testing

Currently, tests are gutted. They will always pass and shouldn't be relied upon. Again, this is only intended to be an exercise in multi-container docker deployment.
