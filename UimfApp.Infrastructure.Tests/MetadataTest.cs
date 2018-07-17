namespace UimfApp.Infrastructure.Tests
{
	using FluentAssertions;
	using UimfApp.DataSeed;
	using Xunit;

	public class MetadataTest
	{
		[Fact]
		public void MetadataIsConfiguredCorrectly()
		{
			new DataSeedDiContainer().Should().NotBeNull();
		}
	}
}