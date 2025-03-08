# a11yUX

A11yUX is a project focused on creating an accessible and user-friendly web interface that adheres to WCAG 2.1 guidelines. This project demonstrates best practices for web accessibility and includes various components such as navigation, carousels, and dynamic content loading.

## Features

- **Accessible Navigation**: The navigation header and footer are dynamically loaded and include proper ARIA roles and landmarks.
- **Dynamic Content Loading**: Content such as the navigation header and footer are loaded dynamically using JavaScript, with focus management and screen reader announcements.
- **Sanitized Content**: User-generated content is sanitized to prevent XSS attacks.
- **Responsive Design**: The layout is responsive and adapts to different screen sizes using Bootstrap.
- **ARIA Live Regions**: Important updates are announced to screen readers using ARIA live regions.

## File Structure

```
a11yUX/
├── css/
│   └── main_pri.css
├── js/
│   ├── data_fetch_todo.js
│   ├── main_pri.js
│   └── utility.js
├── index.html
├── header.html
├── footer.html
└── README.md
```

## Technologies Used

- **HTML**: For structuring the web pages.
- **CSS**: For styling the web pages.
- **JavaScript**: For dynamic content loading and interactivity.
- **Bootstrap**: For responsive design and pre-built components.
- **jQuery**: For simplified DOM manipulation and AJAX requests.

## Accessibility Features

- **Keyboard Navigation**: All interactive elements are accessible via keyboard.
- **Screen Reader Compatibility**: Proper use of ARIA roles and landmarks ensures compatibility with screen readers.
- **Focus Management**: Focus is managed correctly when dynamic content is loaded.
- **ARIA Live Regions**: Important updates are announced to screen readers.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.


