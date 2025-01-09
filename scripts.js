// Business Chart Setup (Using Chart.js)
const ctx = document.getElementById('business-chart').getContext('2d');
const businessChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Business 1', 'Business 2', 'Business 3', 'Business 4', 'Business 5'],
    datasets: [{
      label: 'Revenue ($)',
      data: [12000, 15000, 8000, 20000, 5000],
      backgroundColor: ['#4caf50', '#2196f3', '#ff9800', '#f44336', '#9c27b0'],
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});

// Handle Add Business Form Submission
document.getElementById('business-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('New business added successfully!');
});


// Handle Settings Form Submission
document.getElementById('settings-form').addEventListener('submit', (e) => {
  e.preventDefault();

  // Get selected preferences
  const theme = document.getElementById('theme-selector').value;
  const fontSize = document.getElementById('font-size-selector').value;
  const chartType = document.getElementById('chart-type-selector').value;
  const emailNotifications = document.getElementById('email-notifications').checked;
  const smsNotifications = document.getElementById('sms-notifications').checked;

  // Apply preferences
  applyPreferences({ theme, fontSize, chartType, emailNotifications, smsNotifications });

  alert('Preferences saved successfully!');
});

// Apply Settings Function
function applyPreferences(preferences) {
  // Change theme
  document.body.className = preferences.theme; // Use "light" or "dark" class in CSS

  // Change font size
  document.body.style.fontSize = preferences.fontSize === 'small' ? '14px' :
                                 preferences.fontSize === 'large' ? '18px' : '16px';

  // Update chart type (re-render chart with new type)
  businessChart.config.type = preferences.chartType;
  businessChart.update();

  // Log notification preferences
  console.log('Email Notifications:', preferences.emailNotifications);
  console.log('SMS Notifications:', preferences.smsNotifications);
}