export const fetchUserCoordinates = async () =>
    new Promise<google.maps.LatLng>((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error("Geolocation is not supported in your browser."));
        }
        navigator.permissions.query({ name: "geolocation" }).then((permissionStatus) => {
            if (permissionStatus.state === "denied") {
                reject(new Error("Geolocation is denied in your browser."));
            } else {
                navigator.geolocation.getCurrentPosition(
                    (position) => resolve(new google.maps.LatLng(position.coords.latitude, position.coords.longitude)),
                    (error) => reject(error),
                    { maximumAge: 50000, timeout: 20000, enableHighAccuracy: true },
                );
            }
        });
    });
