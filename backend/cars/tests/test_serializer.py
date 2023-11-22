from django.test import TestCase
from django.utils import timezone
from exhibitions.models import Exhibition
from cars.models import Car
from cars.serializers import CarSerializer


class TestCarSerializerTest(TestCase):
    def setUp(self):
        self.exhibition = Exhibition.objects.create(
            title="Test Exhibition",
            summary="Test summary",
            start_date=timezone.now(),
            end_date=timezone.now() + timezone.timedelta(days=7),
            address="Test address",
            ticket_price=10.0,
            contact_details="Test contact details",
        )
        self.car = Car.objects.create(
            name="Test Car",
            description="Test description",
            image="car_images/test_image.avif",
            year_manufacture=2022,
            engine_displacement=2.0,
            horsepower=200,
            exhibition=self.exhibition,
        )
        self.serializer = CarSerializer(instance=self.car)

    def test_serializer_contains_expected_fields(self):
        data = self.serializer.data
        self.assertEqual(set(data.keys()), {'id', 'name', 'description', 'image', 'year_manufacture',
                         'engine_displacement', 'horsepower', 'additional_features', 'exhibition'})

    def test_serializer_field_values(self):
        data = self.serializer.data
        self.assertEqual(data['name'], "Test Car")
        self.assertEqual(data['description'], "Test description")
        self.assertEqual(data['image'], "/media/car_images/test_image.avif")
        self.assertEqual(data['year_manufacture'], 2022)
        self.assertEqual(data['engine_displacement'], "2.00")
        self.assertEqual(data['horsepower'], 200)
        self.assertIsNone(data['additional_features'])
        self.assertEqual(data['exhibition'], self.exhibition.id)
