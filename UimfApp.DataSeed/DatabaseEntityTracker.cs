namespace UimfApp.DataSeed
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using UimfApp.Infrastructure.Domain;

	public class DatabaseEntityTracker
	{
		private readonly Dictionary<string, DatabaseRecord> databaseRecords = new Dictionary<string, DatabaseRecord>();

		public bool Exist<TEnity>(string name)
		{
			var type = typeof(TEnity);
			var key = Key(name, type);
			return this.databaseRecords.ContainsKey(key);
		}

		public int GetDomainEntityId<TEntity>(string name)
			where TEntity : DomainEntityWithKeyInt32
		{
			return (int)this.GetEntityId<TEntity>(name);
		}

		public string GetDomainName<T>(T item)
			where T : DomainEntityWithKeyInt32
		{
			var type = item.GetType().FullName;
			// ReSharper disable once AssignNullToNotNullAttribute
			return this.databaseRecords.SingleOrDefault(t => (int)t.Value.EntityId == item.Id && t.Key.EndsWith(type)).Key;
		}

		public object GetEntityId<TEntity>(string name)
		{
			var type = typeof(TEntity);
			var key = Key(name, type);
			return this.databaseRecords.ContainsKey(key)
				? this.databaseRecords[key].EntityId
				: throw new Exception($"Entity '{name}' of type '{type.FullName}' was not found.");
		}

		public string GetEntityName<T>(object key)
			where T : DomainEntityWithKeyInt32
		{
			return this.databaseRecords
				.SingleOrDefault(t => t.Key.EndsWith($":{typeof(T).FullName}") && t.Value.EntityId == key)
				.Key;
		}

		public void RegisterEntity(string name, DomainEntityWithKeyInt32 entity)
		{
			var record = new DatabaseRecord(entity);
			var key = Key(name, entity);
			this.databaseRecords.Add(key, record);
		}

		public void RegisterEntity<TEntity, TEntityId>(string name, TEntityId id)
		{
			var record = new DatabaseRecord(id);
			var key = Key(name, typeof(TEntity));
			this.databaseRecords.Add(key, record);
		}

		public void RegisterEntity<TEntity, TKey>(string name, TEntity entity, Func<TEntity, TKey> entityId)
		{
			var record = new DatabaseRecord(entityId(entity));
			var key = Key(name, entity.GetType());
			this.databaseRecords.Add(key, record);
		}

		private static string Key(string name, Type entityType)
		{
			return $"{name}:{entityType.FullName}";
		}

		private static string Key(string name, DomainEntityWithKeyInt32 entity)
		{
			return Key(name, entity.GetType());
		}

		private class DatabaseRecord
		{
			public DatabaseRecord(DomainEntity entity)
			{
				this.EntityId = entity.Key;
			}

			public DatabaseRecord(object entityId)
			{
				this.EntityId = entityId;
			}

			public object EntityId { get; }
		}
	}
}
