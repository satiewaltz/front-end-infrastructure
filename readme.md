# Import

```html
<link rel="import" href="yoururl/front-end-infrastructure/front-end-infrastructure.html" />
```

# Use

The front-end-infrastructure will automatically extend several vanilla JavaScript/window objects like these:

### window.Math

```javascript
window.Math.randomRange(min, max);
window.Number.prototype.toRad();
window.Math.calculateDistance(lat1, lon1, lat2, lon2);
```

### window.NodeList

```javascript
window.NodeList.prototype.addEventListener(eventName, handler);
window.NodeList.prototype.remove();
window.NodeList.prototype.exec(callback);
window.NodeList.prototype.setAttribute(key, value);
window.NodeList.prototype.removeAttribute(key);
window.NodeList.prototype.addClass(name);
window.NodeList.prototype.removeClass(name);
```