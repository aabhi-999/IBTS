# IBTS API Documentation

## Base URL
`http://127.0.0.1:8000`

## Endpoints

### Buses
- `GET /buses/` - Get all buses
- `POST /buses/` - Create new bus
- `GET /buses/{id}` - Get bus by ID
- `POST /buses/search` - Search buses

### Booking
- `GET /booking/` - Get all bookings
- `POST /booking/` - Create booking
- `GET /booking/bus/{bus_id}` - Get bus bookings

### Tracking
- `POST /tracking/update/` - Update location
- `GET /tracking/{bus_id}` - Get current location
- `GET /tracking/history/{bus_id}` - Get location history

## Interactive Documentation
Visit: http://127.0.0.1:8000/docs