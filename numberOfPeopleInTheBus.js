// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

const number = busStops => busStops.reduce((n, [on, off]) => n + on - off, 0);