angular.module('myApp', []).controller('MainController', function($scope) {
    // Initialize sections
    $scope.currentSection = 'about';
  
    // Function to switch sections
    $scope.setSection = function(section) {
      $scope.currentSection = section;
    };
  
    // Personal information data
    $scope.name = "Your Name";
    $scope.nativeTown = "Your Village/Town";
    $scope.bio = "A brief description about yourself.";
  
    // Hobbies
    $scope.hobbies = ["Reading", "Traveling", "Coding"];
  
    // Family members
    $scope.family = ["Father: John Doe", "Mother: Jane Doe", "Sibling: Jack Doe"];
  
    // Education
    $scope.schooling = "High School Name, City";
    $scope.college = "College Name, City";
    $scope.qualifications = "Bachelor of Science in Computer Science";
  
    // Certificates & Rewards
    $scope.certificates = ["Certificate in Web Development", "Award for Excellence in Academics"];
  
    // Contributions to Society
    $scope.contributions = "Volunteered in community service, organized coding workshops for beginners, raised funds for local charities.";
  });
  