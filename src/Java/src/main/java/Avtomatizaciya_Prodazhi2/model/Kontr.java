package Avtomatizaciya_Prodazhi2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Avtomatizaciya_Prodazhi2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Контр
 */
@Entity(name = "IISAvtomatizaciya_Prodazhi2Контр")
@Table(schema = "public", name = "Контр")
public class Kontr {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Контрагент")
    private String контрагент;


    public Kontr() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getКонтрагент() {
      return контрагент;
    }

    public void setКонтрагент(String контрагент) {
      this.контрагент = контрагент;
    }


}