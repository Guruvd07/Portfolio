#include <iostream>
#include <vector>
using namespace std;

int findLongestSingleSlot(const vector<vector<int>>& leaveTimes) {
    int maxDuration = 0;
    int employeeWithMax = leaveTimes[0][0];
    int prevTime = 0;

    for (const auto& shift : leaveTimes) {
        int empId = shift[0];
        int leaveTime = shift[1];
        int duration = leaveTime - prevTime;

        if (duration > maxDuration || (duration == maxDuration && empId < employeeWithMax)) {
            maxDuration = duration;
            employeeWithMax = empId;
        }

        prevTime = leaveTime;
    }

    return employeeWithMax;
}

int main() {
    vector<vector<int>> leaveTimes = {{0, 3}, {2, 5}, {0, 9}, {1, 15}};
    cout << findLongestSingleSlot(leaveTimes) << endl;  // Output: 1
    return 0;
}
