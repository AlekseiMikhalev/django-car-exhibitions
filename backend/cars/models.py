from django.db import models
from exhibitions.models import Exhibition


class Car(models.Model):
    """
    Model representing a car exhibited in an exhibition.
    """

    name = models.CharField(max_length=255, help_text="Name of the car.")
    description = models.TextField(help_text="Description of the car.")
    image = models.ImageField(upload_to='car_images/',
                              help_text="Image of the car.")
    year_manufacture = models.PositiveIntegerField(
        help_text="Year of manufacture of the car.")
    engine_displacement = models.DecimalField(
        max_digits=5, decimal_places=2, help_text="Engine displacement of the car in liters."
    )
    horsepower = models.PositiveIntegerField(
        help_text="Horsepower of the car.")
    additional_features = models.TextField(
        blank=True, null=True, help_text="Additional features of the car."
    )
    exhibition = models.ForeignKey(
        Exhibition,
        on_delete=models.CASCADE,
        related_name='cars',
        help_text="Exhibition to which the car belongs.",
    )

    def __str__(self) -> str:
        """
        String representation of the car.

        Returns:
            str: The name of the car.
        """
        return self.name
