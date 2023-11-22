from django.db import models


class Exhibition(models.Model):
    """
    Model representing an exhibition.
    """

    title = models.CharField(
        max_length=255, help_text="Title of the exhibition.")
    summary = models.TextField(help_text="Summary of the exhibition.")
    cover_image = models.ImageField(
        upload_to='exhibition_covers/',
        null=True,
        blank=True,
        help_text="Cover image of the exhibition.",
    )
    start_date = models.DateField(help_text="Start date of the exhibition.")
    end_date = models.DateField(help_text="End date of the exhibition.")
    address = models.TextField(help_text="Address of the exhibition.")
    ticket_price = models.DecimalField(
        max_digits=5, decimal_places=2, help_text="Ticket price for the exhibition."
    )
    contact_details = models.TextField(
        help_text="Contact details for the exhibition.")

    @property
    def formatted_start_date(self) -> str:
        """
        Formatted start date of the exhibition.

        Returns:
            str: Formatted start date.
        """
        return self.start_date.strftime('%B %d, %Y')

    @property
    def formatted_end_date(self) -> str:
        """
        Formatted end date of the exhibition.

        Returns:
            str: Formatted end date.
        """
        return self.end_date.strftime('%B %d, %Y')

    def __str__(self) -> str:
        """
        String representation of the exhibition.

        Returns:
            str: The title of the exhibition.
        """
        return self.title
