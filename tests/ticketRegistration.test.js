const assert = require('assert');

function registerTicket(currentBooked, maxCapacity, alreadyRegistered) {
  if (alreadyRegistered) throw new Error('Duplicate Registration');
  if (currentBooked >= maxCapacity) throw new Error('Capacity Reached');
  return { status: 'CONFIRMED', seatNumber: currentBooked + 1 };
}

// TDD assert() checks matching Task 4.2
assert.deepStrictEqual(registerTicket(49, 50, false), { status: 'CONFIRMED', seatNumber: 50 });
assert.throws(() => registerTicket(50, 50, false), /Capacity Reached/);
assert.throws(() => registerTicket(10, 50, true), /Duplicate Registration/);

console.log('All USM Event Management Hub TDD assertions passed!');
