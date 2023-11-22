from django.test import TestCase
from ..models import Car
from exhibitions.models import Exhibition


class TestCarModelTest(TestCase):
    def setUp(self):
        self.exhibition = Exhibition.objects.create(
            title="Test Exhibition",
            summary="Test summary",
            start_date="2023-11-22",
            end_date="2023-12-01",
            address="Test address",
            ticket_price=10.0,
            contact_details="Test contact details",
        )
        self.car = Car.objects.create(
            name="Test Car",
            description="Test description",
            image="/media/car_images/test_image.avif",
            year_manufacture=2022,
            engine_displacement=2.0,
            horsepower=200,
            exhibition=self.exhibition,
        )

    def test_car_str_method(self):
        self.assertEqual(self.car.name, "Test Car")
        self.assertEqual(self.car.description, "Test description")
        self.assertEqual(self.car.image, "/media/car_images/test_image.avif")
        self.assertEqual(self.car.year_manufacture, 2022)
        self.assertEqual(self.car.engine_displacement, 2.0)
        self.assertEqual(self.car.horsepower, 200)
        self.assertEqual(self.car.exhibition, self.exhibition)
