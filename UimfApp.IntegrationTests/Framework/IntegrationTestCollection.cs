namespace UimfApp.IntegrationTests.Framework
{
	using Xunit;

	[CollectionDefinition(Name)]
	public class IntegrationTestCollection : ICollectionFixture<IntegrationTestFixture>
	{
		internal const string Name = "integration-tests";
		// This class has no code, and is never created. Its purpose is simply
		// to be the place to apply [CollectionDefinition] and all the
		// ICollectionFixture<> interfaces.
	}
}
