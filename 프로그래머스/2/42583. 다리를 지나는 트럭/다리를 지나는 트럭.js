function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridge = Array(bridge_length).fill(0);
    let totalWeight = 0;
    while (truck_weights.length > 0 || totalWeight > 0) {
        time++;
        totalWeight -= bridge.shift();
        const nextTruck = truck_weights[0];
        
        if (nextTruck + totalWeight <= weight) {
            bridge.push(truck_weights.shift());
            totalWeight += nextTruck;
        } else {
            bridge.push(0);
        }
    }

    return time;
}